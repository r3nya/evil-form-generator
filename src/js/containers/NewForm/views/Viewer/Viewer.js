import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { FieldButtons } from '../'
import { Button, Alert, EditIcon, Modal, TextArea } from 'components/uiToolkit'
import styles from './Viewer.css'


export default class Viewer extends Component {
  static propTypes = {
    description: PropTypes.string,
    notifications: PropTypes.array,
    children: PropTypes.node.isRequired,
    onSaveForm: PropTypes.func.isRequired,
    clearNotifications: PropTypes.func.isRequired,
    onBtnClick: PropTypes.func.isRequired,
    onChangeDescription: PropTypes.func.isRequired,
  };

  state = {
    descriptionModal: false,
    fieldsModal: false
  }

  // Modals im mobile layout
  openEditDescriptionModal = () => {
    const { descriptionModal } = this.state

    this.setState({
      descriptionModal: !descriptionModal
    })
  }

  openFieldsModal = () => {
    const { fieldsModal } = this.state

    this.setState({
      fieldsModal: !fieldsModal
    })
  }

  render() {
    const {
      children,
      description,
      notifications,
      onSaveForm,
      clearNotifications,
      onBtnClick,
      onChangeDescription
    } = this.props

    const { descriptionModal, fieldsModal } = this.state

    return (
      <div>
        {!!notifications.length &&
          notifications.map((msg, key) => (
            <Alert
              key={key}
              onCloseClick={() => clearNotifications()}
              {...msg}
            />
          ))
        }
        <header className="grid grid__middle">
          <h6
            className={cx(styles.description, 'cell cell__12of12',
            'cell__sm__9of12 cell__md__10of12')}
          >
            Description:&nbsp;
            <small>{description}</small>
            <Button
              style="outline"
              className="xs-only"
              onClick={this.openEditDescriptionModal}
            >
              <EditIcon />
            </Button>
          </h6>

          <div className={cx('cell cell__12of12 cell__sm__3of12 cell__md__2of12', styles.btns)}>
            <Button
              className="xs-only"
              style="primary"
              onClick={this.openFieldsModal}
            >
              Add field
            </Button>
            <Button
              style="primary"
              onClick={() => onSaveForm()}
            >
              Save form
            </Button>
          </div>

        </header>

        <hr />

        {children}

        {descriptionModal &&
          <Modal onClose={this.openEditDescriptionModal}>
            <TextArea
              label="Form Description"
              rows="5"
              onChange={(event) => onChangeDescription(event.target.value)}
            />
          </Modal>
        }

        {fieldsModal &&
          <Modal onClose={this.openFieldsModal}>
            <FieldButtons
              onBtnClick={onBtnClick}
            />
          </Modal>
        }

      </div>
    )
  }
}
