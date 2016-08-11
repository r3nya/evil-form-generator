import React, { PropTypes } from 'react'
import cx from 'classnames'
import styles from './ViewerHeader.css'

export const ViewerHeader = props => {

  return (
    <div className={cx('grid grid__middle', styles.header)}>
      <div className="cell cell__5of12">
        Question title
      </div>
      <div className="cell cell__5of12">
        Choices
      </div>
      <div className="cell cell__2of12">
        Required?
      </div>
    </div>
  )
}

ViewerHeader.propTypes = {

}
