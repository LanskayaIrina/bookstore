import React from 'react';
import { string, func } from 'prop-types';

export const Button = ({ text, type, className, onClick }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  className: string,
  type: string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
};
