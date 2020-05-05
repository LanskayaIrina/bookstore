import React, { useState, useEffect } from 'react';
import { func, number, bool, arrayOf } from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';

import './styles.scss';

export const SideBar = ({
  getCategories,
  categories,
  searchString,
  hasCategories,
  urlBuilder,
  entryFilterParam,
  favorites,
  isFavorites,
}) => {
  const [categoryIsChecked, setCategoryIsChecked] = useState({});

  const [categoryForRequest, setCategoryForRequest] = useState([]);

  const stateIsEmpty = Object.keys(categoryIsChecked).length;

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const createCategories = categories.reduce((state, category) => {
      return {
        ...state,
        [category]: false,
      };
    }, {});

    setCategoryIsChecked({ ...createCategories });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    urlBuilder({
      page: 1,
      category: categoryForRequest,
      title_like: searchString,
      id: isFavorites ? favorites : '',
    });

    entryFilterParam(categoryForRequest);

    // eslint-disable-next-line
  }, [categoryForRequest.length]);

  const onCheck = (event) => {
    const {
      target: { name, checked },
    } = event;

    setCategoryIsChecked({ ...categoryIsChecked, [name]: !categoryIsChecked[name] });

    if (checked) {
      setCategoryForRequest([...categoryForRequest, name]);
    } else {
      setCategoryForRequest(categoryForRequest.filter((category) => category !== name));
    }
  };

  const clearAllFilters = () => {
    setCategoryIsChecked({
      ...categories.reduce((state, category) => {
        return {
          ...state,
          [category]: false,
        };
      }, {}),
    });
    setCategoryForRequest([]);
  };

  return hasCategories ? (
    <div className="side-bar">
      <h2 className="title">Categories</h2>
      <FormGroup>
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={<Checkbox onChange={onCheck} checked={categoryIsChecked[category]} name={category} />}
            label={category}
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
