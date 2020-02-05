import React from 'react';
import Character from '../components/Character';
import characters from '../services/characters.json';
import useQuotes from '../Hooks/useQuotes';
import QuotesDisplay from '../components/QuotesDisplay';

const QuoteApp = () => {
  const { character, setCharacter, setNumber, displayQuotes } = useQuotes();
  const characterRadioButtons = characters.map((mappedCharacter, i) => (
    <Character key={i} character={character} name={mappedCharacter.name} img={mappedCharacter.img} onChange={() => setCharacter(mappedCharacter)} />
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
      <QuotesDisplay quotesArray={displayQuotes} />
    </section>
  );
};

export default QuoteApp;
