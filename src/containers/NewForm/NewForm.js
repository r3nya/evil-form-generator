import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  addChoice,
  deleteChoice,
  addQuestion,
  changeRequired,
  editTitleQuestion,
  deleteQuestion
} from 'actions';
import { newFormSelector } from 'selectors';
import { Creator, Viewer } from './views';
import styles from './NewForm.css';

const mapDispatchToProps = {
  addChoice,
  deleteChoice,
  addQuestion,
  changeRequired,
  editTitleQuestion,
  deleteQuestion
};

@connect(newFormSelector, mapDispatchToProps)
export default class NewForm extends Component {
  static propTypes = {
    questions: PropTypes.array,
    addChoice: PropTypes.func.isRequired,
    deleteChoice: PropTypes.func.isRequired,
    addQuestion: PropTypes.func.isRequired,
    changeRequired: PropTypes.func.isRequired,
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
          onAddChoice={actions.addChoice}
          onDeleteChoice={actions.deleteChoice}
          onChangeRequired={actions.changeRequired}
          onEditTitle={actions.editTitleQuestion}
          onDeleteClick={actions.deleteQuestion}
        />
      </div>
    );
  }
}
