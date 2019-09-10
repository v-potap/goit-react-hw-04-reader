import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

import styles from './Reader.module.css';

export default class Reader extends Component {
  static defaultProps = {
    index: 0,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
    index: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      pubs: this.props.items,
      index: 0,
    };
  }

  componentDidMount() {
    const { item } = qs.parse(this.props.location.search);
    const { pubs } = this.state;

    const index = Math.max(0, Math.min(item, pubs.length) - 1);
    console.log('item, index :', item, index);
    this.setState({ index });
  }

  componentDidUpdate(prevProps, prevState) {
    const { index } = this.state;

    if (index !== prevState.index) {
      this.props.history.push({
        pathname: this.props.location.pathname,
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
