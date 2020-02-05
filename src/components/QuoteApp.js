import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import { Button } from '../components/Button';
import { Character } from '../components/Character';
import { fetchByCharacter } from '../services/api';
import characters from '../services/characters';

export const QuoteAppFn = () => {
  const fetch = () => fetchByCharacter()
    .then(quote => setQuote(quote));

  useEffect(() => fetch(), []);

  const characterRadioButtons = characters.map((character, i) => (
    <Character name={character.name} img={character.img} />
  ));

  return (
    <section>
      {characterRadioButtons}
    </section>
  );
};
