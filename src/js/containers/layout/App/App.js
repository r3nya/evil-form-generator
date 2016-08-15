import React, { PropTypes } from 'react'
import { Header, Footer } from 'containers/layout'
import styles from './App.css'

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
  children: PropTypes.element.isRequired,
  params: PropTypes.object,
  route: PropTypes.object,
}
