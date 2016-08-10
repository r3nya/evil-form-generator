import React, { PropTypes } from 'react'
// import cx from 'classnames'
import camelcase from 'camelcase'
import styles from './TextArea.css'

export const TextArea = props => {
  const { label, ...rest } = props
  const idAttr = label ? camelcase(label) : ''

  return (
    <div className={styles.cont}>
      {label &&
        <label
          htmlFor={idAttr}
          className={styles.label}
        >
          {label}
        </label>
      }
      <textarea
        id={idAttr}
        className={styles.txtArea}
        {...rest}
      ></textarea>
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string
}
