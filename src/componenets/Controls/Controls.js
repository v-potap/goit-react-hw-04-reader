import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ index, total, handleClick }) => (
  <section className={styles.controls}>
    <button
      className={styles.button}
      type="button"
      disabled={index === 1}
      onClick={e => handleClick(e, -1)}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      disabled={index === total}
      onClick={e => handleClick(e, 1)}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
