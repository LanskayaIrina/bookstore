import React, { useState, useEffect } from 'react';
import { func, number } from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './styles.scss';

export const SideBar = ({ getCategories, categories, searchString, hasCategories, urlBuilder, entryFilterParam }) => {
  const [categoryIsChecked, setCategoryIsChecked] = useState({});

  const [categoryForRequest, setCategoryForRequest] = useState([]);

  const createCategories = categories.reduce((state, category) => {
    return {
      ...state,
      [category]: false,
    };
  }, {});

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    if (hasCategories) setCategoryIsChecked(createCategories);
  }, [categories]);

  useEffect(() => {
    urlBuilder({
      page: 1,
      category: categoryForRequest,
      title_like: searchString,
    });

    entryFilterParam(categoryForRequest);
  }, [categoryForRequest.length]);

  const onCheck = (event) => {
    const {
      target: { name, checked },
    } = event;

    setCategoryIsChecked({ ...categoryIsChecked, [name]: checked });

    if (checked) {
      setCategoryForRequest([...categoryForRequest, name]);
    } else {
      setCategoryForRequest(categoryForRequest.filter((category) => category !== name));
    }
  };

  const clearAllFilters = () => {
    setCategoryIsChecked(createCategories);
    setCategoryForRequest([]);
  };

  return hasCategories ? (
    <div className="side-bar">
      <h2 className="title">Categories</h2>
      <FormGroup column>
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={<input type="checkbox" checked={categoryIsChecked[category]} onChange={onCheck} name={category} />}
            label={category}
          />
        ))}
      </FormGroup>
      <button onClick={clearAllFilters}>Clear All</button>
    </div>
  ) : null;
};

SideBar.propTypes = {
  filterCategory: func.isRequired,
  page: number.isRequired,
};
