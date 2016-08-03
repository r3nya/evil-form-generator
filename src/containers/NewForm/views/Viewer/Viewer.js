import React, { Component, PropTypes } from 'react';
import QuestionItem from 'components/QuestionItem';
import styles from './Viewer.css';

export default class Viewer extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  render() {
    const { data, onDeleteClick } = this.props;

    return (
      <div className={styles.bg}>
        Viewer
        {data.length &&
          data.map((item, id) => (
            <QuestionItem
              key={id}
              onDeleteClick={() => onDeleteClick(item)}
              {...item}
            />
          ))
        }
      </div>
    );
  }
}
