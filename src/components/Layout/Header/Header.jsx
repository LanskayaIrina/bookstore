import React from 'react';
import { NavLink } from 'react-router-dom';
import { bool, number } from 'prop-types';

import { BOOKS, CART, CONTACTS, LOGIN } from 'constants/pathNames';
import logo from 'assets/images/logo.svg';

import './styles.scss';

export const Header = ({ isLogged, cartCount, authUser }) => {
  return (
    <div className="header">
      <div className="logo">
        <NavLink to={BOOKS} className="link logo-link">
          <img className="logo-img" src={logo} alt="envelope" />
          Get Books
        </NavLink>
      </div>
      <div className="header-nav-links">
        <NavLink to={CONTACTS} className="link  contacts-link">
          Contacts
        </NavLink>
        <NavLink to={CART} className="link  cart-link">
          <span>Cart</span>
          <span className="cart-count">{cartCount > 0 && isLogged ? cartCount : null}</span>
        </NavLink>
        {isLogged ? (
          <NavLink to={LOGIN} className="link log-link" onClick={() => authUser(false)}>
            Logout
          </NavLink>
        ) : (
          <NavLink to={LOGIN} className="link header-link log-link">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  isLogged: bool,
  cartCount: number,
};

Header.defaultProps = {
  isLogged: false,
  cartCount: 0,
};
