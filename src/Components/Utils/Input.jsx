import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <input
      className={`${styles.input} ${styles[props.type]}`}
      placeholder={props.placeholder}
    >
      {props.icon && <props.icon />}
    </input>
  );
};

export default Input;
