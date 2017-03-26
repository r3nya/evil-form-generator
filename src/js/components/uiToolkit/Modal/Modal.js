import React, { PropTypes } from 'react'
import { CloseIcon } from 'components/uiToolkit'
import styles from './Modal.css'

const { node, func } = PropTypes

export const Modal = props => {
  const { children, onClose } = props

  return (
    <div className={styles.modal}>
      <div className={styles.panel}>
        <CloseIcon onClick={onClose} />
      </div>
      {children}
    </div>
  )
}

Modal.propTypes = {
  children: node,
  onClose: func.isRequired
}
