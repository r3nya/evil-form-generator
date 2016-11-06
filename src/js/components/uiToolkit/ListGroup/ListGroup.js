import React, { PropTypes } from 'react'
import './ListGroup.css'

const { node, string } = PropTypes

export const ListGroup = props => {
  const { children, className } = props

  return (
    <ul className={className}>
      {children}
    </ul>
  )
}

ListGroup.propTypes = {
  children: node,
  className: string,
}
