import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '../_shared/Button';

import './Header.css';

export function Header({ isLogged }) {
  return (
    <div className="header-container">
      <div className="order-btn">
        <NavLink to="/books">
          <Button title="Get Books" className="btn order" />
        </NavLink>
      </div>
      <div className="btn-group">
        <NavLink to="/contacts">
          <Button title="Contacts" className="btn contacts" />
        </NavLink>

        <NavLink to="/cart">
          <Button title="Cart" className="btn card" />
        </NavLink>

        {!isLogged ? (
          <NavLink to="/login">
            <Button title="Logout" className="btn log" />
          </NavLink>
        ) : (
          <NavLink to="/login">
            <Button title="Logout" className="btn log" />
          </NavLink>
        )}
      </div>
    </div>
  );
}
