import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  addChoice,
  deleteChoice,
  addQuestion,
  changeDescription,
  changeChoice,
  changeRequired,
  editTitleQuestion,
  deleteQuestion,
  dragQuestion,
  saveForm,
  validation,
  clearNotifications,
  fetchForms,
  getForm,
  cleanFields
} from 'actions'
import { newFormSelector } from 'selectors'
import { arrayMove } from 'react-sortable-hoc'
import { Creator, Viewer, ViewerContainer, ViewerHeader } from './views'
import { BackBtn } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './NewForm.css'

const { array, func, object, string } = PropTypes

const mapDispatchToProps = {
  addChoice,
  deleteChoice,
  addQuestion,
  changeDescription,
  changeChoice,
  changeRequired,
  editTitleQuestion,
  deleteQuestion,
  dragQuestion,
  saveForm,
  validation,
  clearNotifications,
  fetchForms,
  getForm,
  cleanFields
}

@connect(newFormSelector, mapDispatchToProps)
export default class NewForm extends Component {
  static propTypes = {
    questions: array,
    notifications: array,
    addChoice: func.isRequired,
    description: string,
    route: object,
    params: object,
    deleteChoice: func.isRequired,
    addQuestion: func.isRequired,
    changeDescription: func.isRequired,
    changeChoice: func.isRequired,
    changeRequired: func.isRequired,
    editTitleQuestion: func.isRequired,
    deleteQuestion: func.isRequired,
    dragQuestion: func.isRequired,
    saveForm: func.isRequired,
    validation: func.isRequired,
    fetchForms: func.isRequired,
    getForm: func.isRequired,
    cleanFields: func.isRequired,
    clearNotifications: func.isRequired
  };

  componentDidMount() {
    const { fetchForms, getForm, cleanFields, params: { id } } = this.props

    if (id) {
      Promise.resolve()
        .then(() => fetchForms())
        .then(() => getForm(id))
    } else {
      cleanFields()
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { questions, dragQuestion } = this.props
    dragQuestion(arrayMove(questions, oldIndex, newIndex))
  }

  handleSaveForm = () => {
    const { saveForm, validation, params: { id } } = this.props

    return Promise.resolve()
      .then(() => validation())
      .then(() => saveForm(+id))
      .catch(err => console.error(err))
  }

  render() {
    const {
      questions,
      description,
      route: { backUrlType },
      notifications,
      ...actions
    } = this.props

    return (
      <div className="grid">
        <header className={cx('cell cell__12of12 grid grid__middle grid__center', styles.header)}>
          <BackBtn
            className={styles.backBtn}
            to={`/${backUrlType}`}
          />
          <h3>Evil form generator</h3>
        </header>
        <div className={cx('cell cell__3of12 not-xs not-sm', styles.creator)}>
          <Creator
            description={description}
            onBtnClick={actions.addQuestion}
            onChangeDescription={actions.changeDescription}
          />
        </div>

        <div className={cx('cell cell__12of12 cell__sm__9of12', styles.viewer)}>
          <Viewer
            description={description}
            notifications={notifications}
            onSaveForm={this.handleSaveForm}
            onBtnClick={actions.addQuestion}
            onChangeDescription={actions.changeDescription}
            clearNotifications={actions.clearNotifications}
          >
            <ViewerHeader />
            <ViewerContainer
              useDragHandle
              onSortEnd={this.onSortEnd}
              data={questions}
              onAddChoice={actions.addChoice}
              onDeleteChoice={actions.deleteChoice}
              onChangeChoice={actions.changeChoice}
              onChangeRequired={actions.changeRequired}
              onEditTitle={actions.editTitleQuestion}
              onDeleteClick={actions.deleteQuestion}
            />
          </Viewer>
        </div>
      </div>
    )
  }
}
