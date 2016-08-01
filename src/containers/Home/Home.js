import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import { fetchArticles } from 'actions';
import { homeSelector } from 'selectors';
import styles from './Home.css';

const mapDispatchToProps = {
  fetchArticles
};

@connect(homeSelector, mapDispatchToProps)
export default class Home extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    text: PropTypes.string,
    fetchArticles: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { loading, text } = this.props;

    return (
      <div className={styles.container}>
        <Loader show={loading} />
        <section className={styles.cat}>
          <figure>
            <figcaption>Hello!</figcaption>
            <img src="http://placekitten.com/400/400" role="presentation" />
          </figure>
        </section>
        <article dangerouslySetInnerHTML={{ __html: text }}></article>
      </div>
    );
  }
}
