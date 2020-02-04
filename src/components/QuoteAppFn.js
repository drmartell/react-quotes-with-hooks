import React, { useState } from 'react';
import Quote from './Quote';
import { Button } from '../components/Button';
import { fetchQuote } from '../services/api';

export const  QuoteAppFn = () => {
  const [quote, setQuote] = useState({
    name: '',
    text: '',
    img: ''
  });
  
  const fetch = () => fetchQuote()
    .then(quote => setQuote({ quote }));

  fetch();

  return (
    <div style={{ display: 'flex', 'justify-content': 'center', 'flex-direction': 'column' }}>
      <Quote {...quote} style={{ display: 'flex', 'justify-content': 'center' }} />
      <Button text="Get a new one" onClick={fetch} style={{ 'align-self': 'center' }} />
    </div>
  );
};


// useEffect(() => {
//   getEvents(month, day)
//     .then(events => setEvents(events));
// }, [month, day]);

// const handleDateChange = ({ target }) => {
//   const [, newMonth, newDay] = target.value.split('-');
//   setMonth(newMonth);
//   setDay(newDay);
// };