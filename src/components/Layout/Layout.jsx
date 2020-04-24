import React from 'react';
import AppRouter from '../../routs/AppRouter';
import { Header } from '../Header';
import { Footer } from '../Footer';

import './layout.scss';

export const Layout = () => {
  return (
    <>
    <Header />
    <div className="content">
      <AppRouter />
    </div>
    <Footer />
    </>
  );
}
