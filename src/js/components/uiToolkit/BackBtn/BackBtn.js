import React, { PropTypes } from 'react'
import { Button } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './BackBtn.css'

export const BackBtn = props => {
  const { className, ...rest } = props
  const classes = cx(className, styles.btn)

  return (
    <Button
      className={classes}
      {...rest}
    >
      <i className="fa fa-chevron-left"></i>
      <span className={styles.txt}> Back</span>
    </Button>
  )
}

BackBtn.propTypes = {
  className: PropTypes.string,
}
