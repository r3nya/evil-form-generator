import React, { PropTypes } from 'react'
import { Header, Footer } from 'containers/layout'
import styles from './App.css'

const { element, object } = PropTypes

export const App = props => {
  const { children, params, route: { backUrlType } } = props

  return (
    <div className={styles.main}>
      <Header
        backBtn={!!params.id}
        backUrlType={backUrlType}
      />

      <section className={styles.content} role="main">
        {children}
      </section>

      <Footer />
    </div>
  )
}

App.propTypes = {
  children: element.isRequired,
  params: object,
  route: object,
}
