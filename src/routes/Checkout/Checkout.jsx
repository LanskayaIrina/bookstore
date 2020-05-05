import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import { Modal, IconButton } from '@material-ui/core';

import { validateCheckout } from 'utils/validations';
import { BOOKS, CART } from 'constants/pathNames';
import { initialDate, differenceInDate } from 'utils/dates';

import './styles.scss';

export const Checkout = ({ orderingListProducts, orderProducts, isOpen, toggleOpenCheckout }) => {
  const { push } = useHistory();

  const formik = useFormik({
    initialValues: {
      city: '',
      adress: '',
      phone: '',
      when: initialDate(),
    },
    validate: validateCheckout,
    onSubmit: (values) => {
      const { city, adress, phone, when } = values;
      const date = differenceInDate(when);

      const orderData = {
        delivery: { city, adress, phone, date },
        products: orderingListProducts,
      };

      orderProducts(orderData);
      toggleOpenCheckout(false);
      push(BOOKS);
    },
    validateOnChange: false,
  });

  const handleClose = (e) => {
    e.stopPropagation();
    toggleOpenCheckout(false);
    push(CART);
  };

  return (
    <Modal open={isOpen} className="modal">
      <div className="modal-checkout">
        <IconButton onClick={handleClose} className="modal-checkout-close">
          <CloseIcon />
        </IconButton>
        <form onSubmit={formik.handleSubmit} className="form-checkout">
          <h3>Enter your contacts: </h3>
          <TextField
            name="city"
            type="text"
            label="City:"
            onChange={formik.handleChange}
            value={formik.values.city}
            helperText={formik.errors.city}
            error={!!formik.errors.city}
          />
          <TextField
            name="adress"
            type="text"
            label="Adress:"
            onChange={formik.handleChange}
            value={formik.values.adress}
            helperText={formik.errors.adress}
            error={!!formik.errors.adress}
          />
          <TextField
            name="phone"
            type="tel"
            label="Phone:"
            onChange={formik.handleChange}
            value={formik.values.phone}
            helperText={formik.errors.phone}
            error={!!formik.errors.phone}
          />
          <TextField
            id="datetime-local"
            name="when"
            label="When:"
            type="datetime-local"
            onChange={formik.handleChange}
            defaultValue={initialDate()}
            helperText={formik.errors.when}
            error={!!formik.errors.when}
          />
          <Button variant="contained" type="submit" classes={{ root: 'form-checkout-submit' }}>
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};
