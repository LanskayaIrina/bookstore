import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { BOOKS } from 'constants/pathNames';
import { validateLogin } from 'utils/validations';

import './styles.scss';

export const LogIn = ({ authUser }) => {
  const { push } = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateLogin,
    onSubmit: () => {
      authUser(true);
      push(BOOKS);
    },
    validateOnChange: false,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-login">
      <TextField
        id="email"
        name="email"
        type="email"
        label="Email:"
        onChange={formik.handleChange}
        value={formik.values.email}
        helperText={formik.errors.email}
        error={!!formik.errors.email}
      />
      <TextField
        id="password"
        label="Password:"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        helperText={formik.errors.password}
        error={!!formik.errors.password}
      />
      <Button variant="contained" type="submit" classes={{ root: 'form-login-submit' }}>
        Log In
      </Button>
    </form>
  );
};
