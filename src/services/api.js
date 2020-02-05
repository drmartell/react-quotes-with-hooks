export const fetchByCharacter = name => {
  return fetch(`https://futuramaapi.herokuapp.com/api/characters/${name}`)
    .then(res => res.json())
    .then(quotes => quotes.map(({ quote }) => ({ text: quote })));
};
