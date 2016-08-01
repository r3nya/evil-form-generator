import React, { PropTypes } from 'react';
import { Header, Footer } from 'containers/layout';
import styles from './App.css';

export const App = props => {
  const { children } = props;

  return (
    <div className={styles.main}>
      <Header />

      <section className={styles.content} role="main">
        {children}
      </section>

      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired
};
