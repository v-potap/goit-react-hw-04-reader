import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ publication }) => (
  <article className={styles.publication}>
    <h2>{publication.title}</h2>
    <p>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
