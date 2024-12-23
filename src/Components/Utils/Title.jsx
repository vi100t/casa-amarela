import React from 'react';
import styles from './Title.module.css';

const Title = (props) => {
  return (
    <div className={`${styles.title} ${styles[props.type]}`}>{props.label}</div>
  );
};

export default Title;
