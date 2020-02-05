import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import { Button } from '../components/Button';
import { fetchQuote } from '../services/api';

export const QuoteAppFn = () => {
  const [quote, setQuote] = useState({
    name: '',
    text: '',
    img: ''
  });

  const fetch = () => fetchQuote()
    .then(quote => setQuote(quote));

  useEffect(() => fetch(), []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Quote {...quote} style={{ display: 'flex', justifyContent: 'center' }} />
      <Button text="Get a new one" onClick={fetch} style={{ alignSelf: 'center' }} />
    </div>
  );
};
