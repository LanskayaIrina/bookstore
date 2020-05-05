import React from 'react';
import { string, func, element } from 'prop-types';

export const Button = ({ text, element, type, className, onClick, style }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick} style={style}>
      {text || element}
    </button>
  );
};

Button.propTypes = {
  onClick: func.isRequired,
  element: element,
  className: string,
  type: string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  element: null,
  text: '',
};
