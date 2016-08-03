import React, { Component, PropTypes } from 'react';
import styles from './Viewer.css';

export default class Viewer extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  render() {
    const { data } = this.props;

    return (
      <div className={styles.bg}>
        Viewer
        {data.length &&
          data.map((item, id) => (
            <div key={id}>{item.type}</div>
          ))
        }
      </div>
    );
  }
}
