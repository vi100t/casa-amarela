import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={`${styles.button} ${styles[props.type]}`}>
      {props.label}
    </button>
  );
};

export default Button;
