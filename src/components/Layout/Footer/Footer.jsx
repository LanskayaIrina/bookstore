import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import './styles.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <Grid item xs={12} md={4}>
        <div className="footer-info">
          <div className="footer-info-item">
            <Link to="#" className="link">
              Privacy
            </Link>
          </div>
          <div className="footer-info-item">
            <Link to="#" className="link">
              Terms
            </Link>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className="footer-logo">
          <span className="footer-logo-name">GetBooks</span>
          <span className="footer-logo-subtitle">2019-2020 GetBooks, inc</span>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className="footer-nav">
          <Link to="#" className="link">
            Support
          </Link>
        </div>
      </Grid>
    </div>
  );
};
