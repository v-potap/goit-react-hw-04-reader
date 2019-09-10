import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ index, total }) => (
  <p className={styles.counter}>
    {index} / {total}
  </p>
);

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Counter;
