import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, img, onChange }) => (
  <>
    <input type="radio" name="character" id={name} onChange={onChange} />
    <label htmlFor={name}><img src={img} height='200px' /></label>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Character;
