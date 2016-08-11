import React, { PropTypes } from 'react'

export const Viewer = props => {
  const { children, description } = props

  return (
    <div>
      {description &&
        <header>Description: {description}</header>
      }

      {children}

    </div>
  )
}

Viewer.propTypes = {
  description: PropTypes.string,
  children: PropTypes.element.isRequired
}
