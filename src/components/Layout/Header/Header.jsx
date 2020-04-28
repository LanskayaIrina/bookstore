import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { bool } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { BOOKS, CART, CONTACTS, LOGIN } from 'constants/pathNames';
import logo from 'assets/images/logo.svg';

import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = ({ isLogged }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="logo-btn-group">
        <div className="burger-menu">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            {anchorEl && (
              <div
                id="simple-menu"
                className="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <div className="menu-items">
                  <NavLink to={CART} className="link" onClick={handleClose}>
                    Card
                  </NavLink>
                  <NavLink to={CONTACTS} className="link" onClick={handleClose}>
                    Contacts
                  </NavLink>
                  <NavLink to={LOGIN} className="link" onClick={handleClose}>
                    Logout
                  </NavLink>
                </div>
              </div>
            )}
          </IconButton>
        </div>
        <div className="logo">
          <NavLink to={BOOKS} className="link logo-link">
            <img className="logo-img" src={logo} alt="envelope" />
            Get Books
          </NavLink>
        </div>
      </div>
      <div className="header-btn-group">
        <NavLink to={CONTACTS} className="link  contacts-link">
          Contacts
        </NavLink>
        <NavLink to={CART} className="link  card-link">
          Cart
        </NavLink>
        {isLogged ? (
          <NavLink to={LOGIN} className="link log-link">
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
};

Header.defaultProps = {
  isLogged: false,
};
