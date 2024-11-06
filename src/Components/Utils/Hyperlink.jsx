import React from 'react';
import styles from './Hyperlink.module.css';
import { NavLink } from 'react-router-dom';
import ArrowRight from '../../Assets/arrow_right.svg?react';
const Hyperlink = (props) => {
  return (
    <div className={`${styles.hyperlink} ${styles[props.color]} `}>
      <NavLink to={props.href}>{props.label}</NavLink>
      <ArrowRight className={styles[props.arrowColor]} />
    </div>
  );
};

export default Hyperlink;
