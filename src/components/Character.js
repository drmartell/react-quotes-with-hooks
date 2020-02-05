import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, img }) => (
  <>
    <input type="radio" name="character" id={name} />
    <label htmlFor={name}><img src={img} /></label>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired 
};

export default Character;
