import React, { PropTypes } from 'react'
import './ListGroup.css'

export const ListGroup = props => {
  const { children, className } = props
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
