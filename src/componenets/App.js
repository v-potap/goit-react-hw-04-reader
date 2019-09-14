import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import styles from './App.module.css';
import Reader from './Reader/Reader';

import publications from './publications.json';

const App = () => (
  <div className={styles.containerApp}>
    <Route
      path="/reader"
      component={props => (
        <Reader
          publications={publications}
          history={props.history}
          location={props.location}
        />
      )}
    />
    <Route
      path="/"
      render={() => (
        <Redirect
          to={{
            pathname: '/reader',
            search: '?item=1',
          }}
        />
      )}
    />
  </div>
);

App.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ),
  history: PropTypes.object,
  location: PropTypes.object,
};

App.defaultProps = {
  publications,
  history: {},
  location: {},
};

export default App;
