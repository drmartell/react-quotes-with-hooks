import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, ...props }) =>
  <button { ...props}>{text}</button>;

Button.propTypes = {
  text: PropTypes.string.isRequired
};
