import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from 'actions'
import { browserSelector } from 'selectors'
import { Loader, Button } from 'components/uiToolkit'
import { Header, QuestionViewer } from './views'
import styles from './Browser.css'

const { array, object, bool, string, func } = PropTypes

@connect(browserSelector, { fetchItem })
export default class Browser extends Component {
  static propTypes = {
    questions: array,
    params: object,
    loading: bool,
    description: string,
    createdAt: string,
    fetchItem: func.isRequired,
  };

  componentDidMount() {
    const { fetchItem, params: { id } } = this.props
    fetchItem(id)
  }

  render() {
    const { loading, createdAt, questions, description } = this.props

    return (
      <div className={styles.conteiner}>
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

          <Button
            style="primary"
            className={styles.sendBtn}
          >
            Send
          </Button>
        </main>

      </div>
    )
  }
}
