import React from 'react';
import styles from './Carousel.module.css';
import CarouselItemSelected from '../../Assets/carousel-item-selected.svg?react';
import CarouselItem from '../../Assets/carousel-item.svg?react';

const Carousel = (props) => {
  return (
    <div className={`${styles.carousel}`}>
      <CarouselItemSelected />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </div>
  );
};

export default Carousel;
