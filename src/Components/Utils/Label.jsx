import React from 'react';
import styles from './Label.module.css';

const Label = (props) => {
  return (
    <button
      className={`${styles.label} ${styles[props.type]} ${styles[props.size]} 
      ${styles[props.border]} ${styles[props.padding]} 
      ${styles[props.multiple]} ${styles[props.clickable]}`}
    >
      {props.icon && <props.icon className={styles.icon} />}
      {!props.iconOnly && <span>{props.label}</span>}
    </button>
  );
};

export default Label;
