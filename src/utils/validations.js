export const validateLogin = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
    errors.password = 'Must be at list 1 big letter, 1 small letter and 1 digit';
  } else if (/\W/.test(values.password)) {
    errors.password = 'Only letters and digits are supported';
  }

  return errors;
};
