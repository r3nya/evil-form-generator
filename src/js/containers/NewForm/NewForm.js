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
  clearNotifications
} from 'actions'
import { newFormSelector } from 'selectors'
import { Creator, Viewer, ViewerContainer, ViewerHeader } from './views'
import { BackBtn } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './NewForm.css'

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
  clearNotifications
}

@connect(newFormSelector, mapDispatchToProps)
export default class NewForm extends Component {
  static propTypes = {
    questions: PropTypes.array,
    notifications: PropTypes.array,
    addChoice: PropTypes.func.isRequired,
    extraData: PropTypes.object,
    route: PropTypes.object,
    deleteChoice: PropTypes.func.isRequired,
    addQuestion: PropTypes.func.isRequired,
    changeDescription: PropTypes.func.isRequired,
    changeChoice: PropTypes.func.isRequired,
    changeRequired: PropTypes.func.isRequired,
    editTitleQuestion: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired,
    dragQuestion: PropTypes.func.isRequired,
    saveForm: PropTypes.func.isRequired,
    validation: PropTypes.func.isRequired,
    clearNotifications: PropTypes.func.isRequired,
  };

  handleSaveForm = () => {
    const { saveForm, validation } = this.props

    return Promise.resolve()
      .then(() => validation())
      .then(() => saveForm())
      .catch(err => console.error(err))
  }

  render() {
    const {
      questions,
      extraData: { description },
      route: { backUrlType },
      notifications,
      ...actions
    } = this.props

    return (
      <div className={cx('grid', styles.main)}>
        <header className={cx('cell cell__12of12 grid grid__middle grid__center', styles.header)}>
          <BackBtn
            className={styles.backBtn}
            to={`/${backUrlType}`}
          />
          <h3>Evil form generator</h3>
        </header>
        <div className="cell cell__3of12 not-xs">
          <Creator
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
              data={questions}
              onAddChoice={actions.addChoice}
              onDeleteChoice={actions.deleteChoice}
              onChangeChoice={actions.changeChoice}
              onChangeRequired={actions.changeRequired}
              onEditTitle={actions.editTitleQuestion}
              onDeleteClick={actions.deleteQuestion}
              onDragQuestion={actions.dragQuestion}
            />
          </Viewer>
        </div>
      </div>
    )
  }
}
