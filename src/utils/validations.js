const moment = require('moment/moment.js');

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

export const validateCheckout = (values) => {
  const errors = {};

  if (!values.city) {
    errors.city = 'Required';
  } else if (!/^[A-Za-z]+$/.test(values.city)) {
    errors.city = 'Only letters are supported';
  }

  if (!values.adress) {
    errors.adress = 'Required';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^[0-9]+$/.test(values.phone)) {
    errors.phone = 'Only digits  are supported';
  } else if (values.phone.length !== 10) {
    errors.phone = 'The phone length is expected to be 10';
  }

  if (moment().diff(values.when, 'minutes') > 0) {
    errors.when = 'You cannot choose the past date';
  } else if (moment().add(1, 'days').diff(values.when, 'minutes') > 0) {
    errors.when = 'Delivery time must be not less than 24 hours';
  }

  return errors;
};
