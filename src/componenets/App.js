import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import styles from './App.module.css';
import Reader from './Reader/Reader';

import publications from './publications.json';

class App extends Component {
  static defaultProps = {
    items: [
      {
        id: '',
        title: '',
        text: '',
      },
    ],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {};

  render() {
    return (
      <div className={styles.containerApp}>
        <Route
          path="/reader"
          component={props => <Reader items={publications} {...props} />}
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
  }
}

export default App;
