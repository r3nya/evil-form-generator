import React, { Component, PropTypes } from 'react';
import QuestionItem from 'components/QuestionItem';
import styles from './Viewer.css';

export default class Viewer extends Component {
  static propTypes = {
    data: PropTypes.array,
    onChangeRequired: PropTypes.func.isRequired,
    onEditTitle: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  render() {
    const { data, onChangeRequired, onEditTitle, onDeleteClick } = this.props;

    return (
      <div className={styles.bg}>
        Viewer
        {data.length &&
          data.map((item, id) => (
            <QuestionItem
              key={id}
              onChangeRequired={onChangeRequired}
              onEditTitle={onEditTitle}
              onDeleteClick={() => onDeleteClick(item)}
              {...item}
            />
          ))
        }
      </div>
    );
  }
}
