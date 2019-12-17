import React from 'react';

import styles from './Counter.module.css';

const Counter = ({ pageNumber, len }) => (
  <p className={styles.counter}>
    {Number(pageNumber)}/{len}
  </p>
);

export default Counter;
