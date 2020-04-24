import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <Grid container spasing={3}>
        <Grid item xs={4}>
          <div className="footer-info">
            <ul className="footer-info-list">
              <li className="footer-info-item">
                <Link to="#" className="footer-info-link">Privacy</Link>
              </li>
              <li className="footer-info-item">
                <Link to="#" className="footer-info-link">Terms</Link>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="footer-logo">
            <span className="footer-logo-name">GetBooks</span>
            <span className="footer-logo-subtitle">2019-2020 GetBooks, inc</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="footer-nav">
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <Link to="#" className="footer-nav-link">Support</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="#" className="footer-nav-link">Sign Up</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="#" className="footer-nav-link">Sign In</Link>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
