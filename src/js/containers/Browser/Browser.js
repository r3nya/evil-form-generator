import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from 'actions'
import { browserSelector } from 'selectors'
import { QuestionViewer } from 'components/QuestionViewer'
import { Loader, Button } from 'components/uiToolkit'
import { Header } from './views'
import styles from './Browser.css'
// import cx from 'classnames'

const mapDispatchToProps = {
  fetchItem
}

@connect(browserSelector, mapDispatchToProps)
export default class Browser extends Component {
  static propTypes = {
    questions: PropTypes.array,
    params: PropTypes.object,
    loading: PropTypes.bool,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    fetchItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchItem, params: { id } } = this.props
    fetchItem(id)
  }

  render() {
    const { loading, createdAt, questions, description } = this.props

    return (
      <div>
        <Loader show={loading} />

        <Header
          createdAt={createdAt}
          description={description}
        />

        <main className={styles.main}>
          {questions &&
            questions.map((question, key) => (
              <QuestionViewer
                key={key}
                {...question}
              />
            ))
          }
        </main>

        <Button
          style="primary"
        >
          Send
        </Button>


      </div>
    )
  }
}
