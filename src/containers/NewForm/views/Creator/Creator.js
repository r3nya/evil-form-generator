import React, { Component, PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './Creator.css';

export default class Creator extends Component {
  static propTypes = {
    onBtnClick: PropTypes.func.isRequired,
  };

  render() {
    const { onBtnClick } = this.props;

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
                <button onClick={() => onBtnClick('input')}>Single-line text</button>
                <button onClick={() => onBtnClick('radio')}>Radio buttom</button>
                <button onClick={() => onBtnClick('checkbox')}>Checkboxes</button>
                <button onClick={() => onBtnClick('select')}>Select</button>
                <button onClick={() => onBtnClick('file')}>File upload</button>
                <button onClick={() => onBtnClick('paragraph')}>Paragraph text</button>
              </article>
            </TabPanel>

            <TabPanel>
              2
            </TabPanel>
          </Tabs>


        </main>

      </div>
    );
  }
}
