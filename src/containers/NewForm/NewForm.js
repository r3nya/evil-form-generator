import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addQuestion } from 'actions';
import { newFormSelector } from 'selectors';
import { Creator, Viewer } from './views';
import styles from './NewForm.css';

const mapDispatchToProps = {
  addQuestion
};

@connect(newFormSelector, mapDispatchToProps)
export default class NewForm extends Component {
  static propTypes = {
    questions: PropTypes.array,
    addQuestion: PropTypes.func.isRequired,
  };

  render() {
    const { addQuestion, questions } = this.props;

    return (
      <div className={styles.main}>

        <Creator
          onBtnClick={addQuestion}
        />

        <Viewer
          data={questions}
        />
      </div>
    );
  }
}
