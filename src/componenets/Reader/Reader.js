import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

import styles from './Reader.module.css';

export default class Reader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pubs: this.props.publications,
      index: 0,
    };
  }

  componentDidMount() {
    const { item } = qs.parse(this.props.location.search);
    const { pubs } = this.state;

    const index = Math.max(0, Math.min(item, pubs.length) - 1);
    this.setState({ index });
  }

  componentDidUpdate(prevProps, prevState) {
    const { index } = this.state;
    const { pathname } = this.props.location;

    if (index !== prevState.index) {
      this.props.history.push({
        pathname,
        search: `item=${this.state.index + 1}`,
      });
    }
  }

  handleControlsClick = (target, step) => {
    this.setState(prevState => ({
      index: prevState.index + step,
    }));
  };

  render() {
    const { pubs, index } = this.state;
    const pub = pubs[index];

    return (
      <div className={styles.reader}>
        <Publication publication={pub} />
        <Counter index={index + 1} total={pubs.length} />
        <Controls
          handleClick={this.handleControlsClick}
          index={index + 1}
          total={pubs.length}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  index: PropTypes.number,
};

Reader.defaultProps = {
  index: 0,
};
