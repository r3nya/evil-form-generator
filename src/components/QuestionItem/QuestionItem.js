import React, { Component, PropTypes } from 'react';
import styles from './QuestionItem.css';

export default class QuestionItem extends Component {
  static propTypes = {
    type: PropTypes.string,
  };

  render() {
    const { type, onDeleteClick } = this.props;

    return (
      <div className={styles.frm}>
        {type}
        <button onClick={() => onDeleteClick()}>X</button>
      </div>
    );
  }
}
