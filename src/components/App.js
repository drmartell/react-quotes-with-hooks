import React from 'react';
import QuoteApp from '../containers/QuoteApp';
import { QuoteAppFn } from '../components/QuoteAppFn';

export default function App() {
  return (
    <>
      <QuoteApp />
      <QuoteAppFn />
    </>
  );
}
