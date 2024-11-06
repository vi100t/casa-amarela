import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={`${styles.button} ${styles[props.type]}`}>
      {props.icon && <props.icon />}
      <span>{props.label}</span>
    </button>
  );
};

export default Button;
