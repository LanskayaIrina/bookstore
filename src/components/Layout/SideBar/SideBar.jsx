import React, { useState, useEffect } from 'react';
import { func, number, bool, arrayOf } from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';
import { trackPromise } from 'react-promise-tracker';

import './styles.scss';

export const SideBar = ({
  getCategories,
  categories,
  searchString,
  urlBuilder,
  entryFilterParam,
  favorites,
  isFavorites,
}) => {
  const [categoryIsChecked, setCategoryIsChecked] = useState([]);

  const [categoryForRequest, setCategoryForRequest] = useState([]);

  const stateIsEmpty = categoryIsChecked.length < 1;

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const createCategories = categories.reduce((state, category) => {
      return [
        ...state,
        {
          title: category,
          check: false,
        },
      ];
    }, []);

    if (stateIsEmpty) setCategoryIsChecked([...createCategories]);
    // eslint-disable-next-line
  }, [categories]);

  useEffect(() => {
    trackPromise(
      urlBuilder({
        page: 1,
        category: categoryForRequest,
        title_like: searchString,
        id: isFavorites ? favorites : '',
      })
    );

    entryFilterParam(categoryForRequest);
    // eslint-disable-next-line
  }, [categoryForRequest.length]);

  const onCheck = (event) => {
    const {
      target: { name, checked },
    } = event;

    setCategoryIsChecked(
      categoryIsChecked.map(({ title, check }) => {
        if (title === name) {
          return {
            title,
            check: checked,
          };
        }
        return {
          title,
          check,
        };
      })
    );

    if (checked) {
      setCategoryForRequest([...categoryForRequest, name]);
    } else {
      setCategoryForRequest(categoryForRequest.filter((category) => category !== name));
    }
  };

  const clearAllFilters = () => {
    setCategoryIsChecked(
      categories.reduce((state, category) => {
        return [
          ...state,
          {
            title: category,
            check: false,
          },
        ];
      }, [])
    );
    setCategoryForRequest([]);
  };

  return !stateIsEmpty ? (
    <div className="side-bar">
      <h2 className="title">Categories</h2>
      <FormGroup>
        {categoryIsChecked.map(({ title, check }) => (
          <FormControlLabel
            key={title}
            control={<Checkbox onChange={onCheck} checked={check} name={title} />}
            label={title}
          />
        ))}
      </FormGroup>
      <button onClick={clearAllFilters}>Clear All</button>
    </div>
  ) : null;
};

SideBar.propTypes = {
  urlBuilder: func.isRequired,
  page: number.isRequired,
  isFavorites: bool.isRequired,
  favorites: arrayOf(number),
};
