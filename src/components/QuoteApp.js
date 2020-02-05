import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import { Button } from '../components/Button';
import { Character } from '../components/Character';
import characters from '../services/characters.json';
import { useQuotes } from '../Hooks/useQuotes';
import QuotesDisplay from '../components/QuotesDisplay';

export const QuoteApp = () => {

  const { setCharacter, setNumber, displayQuotes } = useQuotes;

  const characterRadioButtons = characters.map((character, i) => (
    <Character key={i} name={character.name} img={character.img} onClick={() => setCharacter(character)}/>
  ));

  return (
    <section>
      {characterRadioButtons}
      <input type="number-drop-down-of-some-kind" onChange={({ target }) => setNumber(target.value)}/>
      <QuotesDisplay quotes={displayQuotes} />
    </section>
  );
};
