import React from 'react';
import styles from './TextContent.module.css';

const TextContent = (props) => {
  return (
    <div
      className={`${styles.textContent} 
      ${styles[props.type]} 
      ${styles[props.color]} ${styles[props.align]}
      ${styles[props.maxCharacters]}`}
    >
      {props.content}
    </div>
  );
};

export default TextContent;
