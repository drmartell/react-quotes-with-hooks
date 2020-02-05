import { useState, useEffect } from 'react';
import { fetchByCharacter } from '../services/api';

export const useQuotes = () => {
  const [character, setCharacter] = useState('');
  const [number, setNumber] = useState(0);
  const [thisQuotes, setThisQuotes] = useState([]);
  const [displayQuotes, setDisplayQuotes] = useState([]);

  useEffect(() => {
    fetchByCharacter(character.name)
      .then(setThisQuotes);
  }, [character]);

  const getRandomQuotes = number => {
    const randomQuotes = [];
    const quotesCopy = thisQuotes.slice();
    while(randomQuotes.length < number){
      const randomIndex = Math.floor(Math.random() * (quotesCopy.length - 1));
      randomQuotes.push(quotesCopy.splice(randomIndex, 1));
    }
    return randomQuotes;
  };

  useEffect(() => {
    setDisplayQuotes(getRandomQuotes(number));
  }, [number]);

  return { character, setCharacter, number, setNumber, thisQuotes, displayQuotes };
};
