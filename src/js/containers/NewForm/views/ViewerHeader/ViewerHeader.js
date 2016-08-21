import React from 'react'
import cx from 'classnames'
import styles from './ViewerHeader.css'

export const ViewerHeader = () => (
  <div className={cx('grid grid__middle not-sm', styles.header)}>
    <div className="cell cell__5of12">
      <h5 className={styles.h5}>Question title</h5>
    </div>
    <div className="cell cell__5of12">
      <h5 className={styles.h5}>Choices</h5>
    </div>
    <div className="cell cell__2of12">
      <h5 className={styles.h5}>Required?</h5>
    </div>
  </div>
)
