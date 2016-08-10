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
  deleteQuestion
} from 'actions'
import { newFormSelector } from 'selectors'
import { Creator, Viewer } from './views'
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
  deleteQuestion
}

@connect(newFormSelector, mapDispatchToProps)
export default class NewForm extends Component {
  static propTypes = {
    questions: PropTypes.array,
    addChoice: PropTypes.func.isRequired,
    extraData: PropTypes.object,
    deleteChoice: PropTypes.func.isRequired,
    addQuestion: PropTypes.func.isRequired,
    changeDescription: PropTypes.func.isRequired,
    changeChoice: PropTypes.func.isRequired,
    changeRequired: PropTypes.func.isRequired,
    editTitleQuestion: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired,
  };

  render() {
    const { questions, extraData: { description }, ...actions } = this.props

    return (
      <div className={cx('grid', styles.main)}>
        <div className="cell cell__3of12">
          <Creator
            onBtnClick={actions.addQuestion}
            onChangeDescription={actions.changeDescription}
          />
        </div>

        <div className={cx('cell cell__9of12', styles.viewer)}>
          <Viewer
            data={questions}
            description={description}
            onAddChoice={actions.addChoice}
            onDeleteChoice={actions.deleteChoice}
            onChangeChoice={actions.changeChoice}
            onChangeRequired={actions.changeRequired}
            onEditTitle={actions.editTitleQuestion}
            onDeleteClick={actions.deleteQuestion}
          />
        </div>
      </div>
    )
  }
}
