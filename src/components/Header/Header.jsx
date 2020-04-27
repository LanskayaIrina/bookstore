import React from 'react';
import { NavLink } from 'react-router-dom';
import { bool } from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../images/logo.svg';

import './Header.scss';

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
export function Header({ isLogged }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
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
                  <NavLink to="/cart" className="link" onClick={handleClose}>
                    Card
                  </NavLink>
                  <NavLink to="/contacts" className="link" onClick={handleClose}>
                    Contacts
                  </NavLink>
                  <NavLink to="/login" className="link" onClick={handleClose}>
                    Logout
                  </NavLink>
                </div>
              </div>
            )}
          </IconButton>
        </div>
        <div className="logo">
          <NavLink to="/books" className="link header-link logo-link">
            <img className="logo-img" src={logo} alt="envelope" />
            Get Books
          </NavLink>
        </div>
      </div>
      <div className="header-btn-group">
        <NavLink to="/contacts" className="link header-link contacts-link">
          Contacts
        </NavLink>

        <NavLink to="/cart" className="link header-link card-link">
          Cart
        </NavLink>
        {isLogged ? (
          <NavLink to="/login" className="link header-link log-link">
            Login
          </NavLink>
        ) : (
          <NavLink to="/login" className="link header-link log-link">
            Logout
          </NavLink>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  isLogged: bool.isRequired,
};
