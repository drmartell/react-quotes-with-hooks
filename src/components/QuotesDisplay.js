import React from 'react';
import PropTypes from 'prop-types';

const QuotesDisplay = ({ quotesArray }) => ( 
  <pre>
    {quotesArray.map((quote, i) => <p key={i}>{quote.text}</p>)}
  </pre>
);

QuotesDisplay.propTypes = {
  quotesArray: PropTypes.array.isRequired
};

export default QuotesDisplay;
