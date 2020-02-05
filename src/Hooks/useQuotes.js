import { useState, useEffect } from 'react';
import { fetchByCharacter } from '../services/api';

const useQuotes = () => {
  const [character, setCharacter] = useState({ name: 'Bender', img: '' });
  const [number, setNumber] = useState(1);
  const [thisQuotes, setThisQuotes] = useState([]);
  const [displayQuotes, setDisplayQuotes] = useState([]);
  
  const getRandomQuotes = number => {
    const randomQuotes = [];
    const quotesCopy = thisQuotes.slice();
    while(randomQuotes.length < number){
      const randomIndex = Math.floor(Math.random() * (quotesCopy.length - 1));
      randomQuotes.push(quotesCopy.splice(randomIndex, 1));
    }
    return randomQuotes.flat();
  };
  
  useEffect(() => {
    fetchByCharacter(character.name)
      .then(setThisQuotes);
  }, [character]);

  useEffect(() => {
    setDisplayQuotes(getRandomQuotes(number));
  }, [thisQuotes, number]);

  return { character, setCharacter, setNumber, displayQuotes, thisQuotes };
};

export default useQuotes;
