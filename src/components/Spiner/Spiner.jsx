import React from 'react';

import './styles.scss';

export const Spiner = () => {
  return (
    <div className="spiner">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
