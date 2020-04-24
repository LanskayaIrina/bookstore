import React from 'react';
import AppRouter from '../../routs/AppRouter';
// import Header from '../Header';
import Footer from '../Footer';

import './layout.scss';

const Layout = () => {
  return (
    <>
    {/* <Header /> */}
    <div className="content">
      <AppRouter />
    </div>
    <Footer />
    </>
  );
}

export default Layout;
