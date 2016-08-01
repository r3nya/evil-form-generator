import React, { Component, PropTypes } from 'react';
import styles from './Loader.css';

export default class Loader extends Component {
  static propTypes = {
    show: PropTypes.bool
  };

  handleClick = event => {
    event.stopPropagation();
  }

  render() {
    const { show } = this.props;

    return show && (
      <div className={styles.container} onClick={this.handleClick}>
        <div className="loader">Loading…</div>
      </div>
    );
  }
}
