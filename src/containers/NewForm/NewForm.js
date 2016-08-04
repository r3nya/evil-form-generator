import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  addQuestion,
  editTitleQuestion,
  deleteQuestion
} from 'actions';
import { newFormSelector } from 'selectors';
import { Creator, Viewer } from './views';
import styles from './NewForm.css';

const mapDispatchToProps = {
  addQuestion,
  editTitleQuestion,
  deleteQuestion
};

@connect(newFormSelector, mapDispatchToProps)
export default class NewForm extends Component {
  static propTypes = {
    questions: PropTypes.array,
    addQuestion: PropTypes.func.isRequired,
    editTitleQuestion: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired,
  };

  render() {
    const { questions, ...actions } = this.props;

    return (
      <div className={styles.main}>

        <Creator
          onBtnClick={actions.addQuestion}
        />

        <Viewer
          data={questions}
          onEditTitle={actions.editTitleQuestion}
          onDeleteClick={actions.deleteQuestion}
        />
      </div>
    );
  }
}
