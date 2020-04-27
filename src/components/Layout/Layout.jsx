import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

import './layout.scss';

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};
