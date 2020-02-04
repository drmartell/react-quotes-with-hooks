export const fetchQuote = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json())
    .then(([{ character, quote, image }]) => ({
      name: character,
      text: quote,
      img: image
    }));
};
