import React, { PropTypes } from 'react'
import cx from 'classnames'
import camelcase from 'camelcase'
import styles from './TextArea.css'

export const TextArea = props => {
  const { label, className, ...rest } = props
  const idAttr = label ? camelcase(label) : ''
  const classes = cx(styles.txtArea, className)

  return (
    <div>
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
        className={classes}
        {...rest}
      ></textarea>
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string
}
