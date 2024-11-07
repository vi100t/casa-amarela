import React from 'react';
import styles from './Select.module.css';

const Select = (props) => {
  return (
    <props.input
      className={`${styles.input} ${styles[props.type]} ${styles[props.icon]}`}
    >
      <option>{props.placeholder}</option>
    </props.input>
  );
};

export default Select;
