import React from 'react';

import Header from './Header';
import { Footer } from './Footer';

import './styles.scss';

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
