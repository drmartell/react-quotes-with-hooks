import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import { Button } from '../components/Button';
import { Character } from '../components/Character';
import characters from '../services/characters.json';
import { useQuotes } from '../Hooks/useQuotes';

export const QuoteApp = () => {

  const { character, setCharacter, number, setNumber, thisQuotes, displayQuotes } = useQuotes;

  const characterRadioButtons = characters.map((character, i) => (
    <Character key={i} name={character.name} img={character.img} onClick={() => setCharacter(character)}/>
  ));

  return (
    <section>
      {characterRadioButtons}
      // number dropdown onChange () => setNumber
      // quote display area
    </section>
  );
};
