import React from 'react';
import Slider from 'react-slick';

import './styles.scss';

export const BooksSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="books-slider">
      <Slider {...settings}>
        <div className="img-block">
          <img
            src="https://www.helperhelper.com/wp-content/uploads/2015/10/bigstock-Stack-Of-Books-70033240.jpg"
            alt="img"
            className="img"
          />
        </div>
        <div className="img-block">
          <img
            src="https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg"
            alt="img"
            className="img"
          />
        </div>
        <div className="img-block">
          <img
            src="https://static.indigoimages.ca/2020/126013-hero-books-40offbestsellers-v2__d.jpg"
            alt="img"
            className="img"
          />
        </div>
        <div className="img-block">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="img"
            className="img"
          />
        </div>
        <div className="img-block">
          <img
            src="https://cnet4.cbsistatic.com/img/jpV_ODS31UVw_RTCuUDnoGZUunk=/940x0/2019/03/04/08873565-6dcc-4f50-b717-5c5545b92d60/book-of-the-month-club-stack-of-books.jpg"
            alt="img"
            className="img"
          />
        </div>
      </Slider>
    </div>
  );
};
