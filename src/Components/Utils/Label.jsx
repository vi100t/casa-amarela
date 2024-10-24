import React from 'react';
import styles from './Label.module.css';

const Label = (props) => {
  return (
    <button
      className={`${styles.label} ${styles[props.type]} ${styles[props.size]}`}
    >
      <props.icon />
      {!props.iconOnly && <span>{props.label}</span>}
    </button>
  );
};

export default Label;
