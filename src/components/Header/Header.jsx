import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export function Header({ isLogged }) {
  const title = isLogged ? 'Logout' : 'Login';
  return (
    <div className="header-container">
      <div className="order-btn">
        <NavLink to="/books" className="btn order">
          Get Books
        </NavLink>
      </div>
      <div className="btn-group">
        <NavLink to="/contacts" className="btn contacts">
          Contacts
        </NavLink>

        <NavLink to="/cart" className="btn card">
          Cart
        </NavLink>
        {isLogged ? (
          <NavLink to="/login" className="btn log">
            Login
          </NavLink>
        ) : (
          <NavLink to="/login" className="btn log">
            Logout
          </NavLink>
        )}
      </div>
    </div>
  );
}
