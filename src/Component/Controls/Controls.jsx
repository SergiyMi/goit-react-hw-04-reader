import React from 'react';

import styles from './Controls.module.css';

const Controls = ({ onIncrement, pageNumber, max }) => {
  const min = 1;
  return (
    <section className={styles.controls}>
      <button
        type="button"
        name="decrement"
        onClick={onIncrement}
        className={styles.button}
        disabled={Number(pageNumber) === min}
      >
        Назад
      </button>
      <button
        type="button"
        name="increment"
        onClick={onIncrement}
        className={styles.button}
        disabled={Number(pageNumber) === max}
      >
        Вперед
      </button>
    </section>
  );
};

export default Controls;
