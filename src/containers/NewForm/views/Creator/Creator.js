import React, { Component, PropTypes } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Button } from 'components/uiToolkit'
import styles from './Creator.css'

export default class Creator extends Component {
  static propTypes = {
    onBtnClick: PropTypes.func.isRequired,
  };

  render() {
    const { onBtnClick } = this.props

    return (
      <div className={styles.bg}>
        <header>Evil form generator</header>
        <main>
          <Tabs>
            <TabList>
              <Tab>Custom fields</Tab>
              <Tab>Description (Optional)</Tab>
            </TabList>

            <TabPanel>
              <header>Add Custom Field</header>
              <article className={styles.btns}>
                <Button
                  style="outline"
                  onClick={() => onBtnClick('input')}
                >
                  Single-line text
                </Button>

                <Button
                  style="outline"
                  onClick={() => onBtnClick('radio')}
                >
                  Radio buttom
                </Button>

                <Button
                  style="outline"
                  onClick={() => onBtnClick('checkbox')}
                >
                  Checkboxes
                </Button>

                <Button
                  style="outline"
                  onClick={() => onBtnClick('select')}
                >
                  Select
                </Button>

                <Button
                  style="outline"
                  onClick={() => onBtnClick('file')}
                >
                  File upload
                </Button>

                <Button
                  style="outline"
                  onClick={() => onBtnClick('paragraph')}
                >
                  Paragraph text
                </Button>
              </article>
            </TabPanel>

            <TabPanel>
              2
            </TabPanel>
          </Tabs>


        </main>

      </div>
    )
  }
}
