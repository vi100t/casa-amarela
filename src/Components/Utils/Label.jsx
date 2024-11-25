import React from 'react';
import styles from './Label.module.css';

const Label = (props) => {
  return (
    <button className={`${styles.label} ${styles[props.type]}`}>
      <props.icon />
      props.iconOnly && {props.label}
    </button>
  );
};

export default Label;
