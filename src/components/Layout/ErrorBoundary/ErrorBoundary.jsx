import React, { Component } from 'react';
import { element } from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorType: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  componentDidCatch(err, errorInfo) {
    this.setState({
      ...this.state,
      errorType: err,
      errorInfo,
    });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className="error-boundary">
          <h1 className="title">We apologize for temporary problems</h1>
          <p className="error-text">
            <span>You can return to </span>
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <span> page.</span>
          </p>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: element,
};

ErrorBoundary.defaultProps = {
  children: null,
};
