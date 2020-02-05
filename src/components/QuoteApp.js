import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import Button from '../components/Button';
import Character from '../components/Character';
import characters from '../services/characters.json';
import useQuotes from '../Hooks/useQuotes';
import QuotesDisplay from '../components/QuotesDisplay';

const QuoteApp = () => {
  const { setCharacter, setNumber, displayQuotes } = useQuotes;
  console.log('displayQuotes', displayQuotes);
  const characterRadioButtons = characters.map((character, i) => (
    <Character key={i} name={character.name} img={character.img} onClick={() => setCharacter(character)}/>
  ));

  return (
    <section>
      {characterRadioButtons}
      <div>
        <select onChange={({ target }) => setNumber(target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      {/* <QuotesDisplay quotesArray={displayQuotes} /> */}
    </section>
  );
};

export default QuoteApp;
