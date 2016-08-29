import React, { PropTypes } from 'react'
import cx from 'classnames'
import camelcase from 'camelcase'
import styles from './TextArea.css'

export const TextArea = props => {
  const { label, className, mainClassName, ...rest } = props
  const idAttr = label ? camelcase(label) : ''
  const classes = cx(styles.txtArea, className)

  return (
    <div className={mainClassName}>
      {label &&
        <label
          htmlFor={idAttr}
          className={styles.label}
        >
          <h3>{label}</h3>
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
  className: PropTypes.string,
  mainClassName: PropTypes.string
}
