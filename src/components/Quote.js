import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, name, img }) => (
  <figure>
    <img src={img} style={{ width:'200px', height:'auto' }} />
    <figcaption>&quot;{text}&quot;{name ? ` ~ by ${name}` : ''}</figcaption>
  </figure>
);

Quote.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Quote;
