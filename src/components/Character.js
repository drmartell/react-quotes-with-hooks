import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character, name, img, onChange }) => (
  <>
    <input type="radio" name="character" id={name} onChange={onChange} checked={name === character.name} />
    <label htmlFor={name}><img src={img} height='200px' /></label>
  </>
);

Character.propTypes = {
  character: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Character;
