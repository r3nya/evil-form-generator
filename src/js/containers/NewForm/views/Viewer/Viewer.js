import React, { PropTypes } from 'react'
import cx from 'classnames'
import { Button, Alert } from 'components/uiToolkit'
import styles from './Viewer.css'

export const Viewer = props => {
  const {
    children,
    description,
    notifications,
    onSaveForm,
    clearNotifications
  } = props

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
        <h6 className={cx(styles.description, 'cell cell__10of12')}>Description:&nbsp;
          <small>{description}</small>
        </h6>

        <div className="cell cell__2of12">
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

    </div>
  )
}

Viewer.propTypes = {
  description: PropTypes.string,
  notifications: PropTypes.array,
  children: PropTypes.node.isRequired,
  onSaveForm: PropTypes.func.isRequired,
  clearNotifications: PropTypes.func.isRequired,
}
