import { useState, useEffect } from 'react';
import { fetchByCharacter } from '../services/api';

export const useQuotes = () => {
  const [character, setCharacter] = useState('');
  const [number, setNumber] = useState(0);

  let allQuotes = [];

  useEffect(() => {
    fetchByCharacter(character.name)
      .then(quotes => allQuotes = quotes);
  }, [character]);

  const getRandomQuotes = (quotes, number) => {
    const randomQuotes = [];
    const quotesCopy = quotes.slice();
    while(randomQuotes.length < number){
      const randomIndex = Math.floor(Math.random() * (quotesCopy.length - 1));
      randomQuotes.push(quotesCopy.splice(randomIndex, 1));
    }
  };

  const changeCharacter = character => setCharacter(character);
  const changeNumber = number => setNumber(number);

  return { character, changeCharacter, number, changeNumber };
};
