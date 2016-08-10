import React, { PropTypes } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Button, TextArea } from 'components/uiToolkit'
import styles from './Creator.css'

export const Creator = props => {
  const { onBtnClick, onChangeDescription } = props

  return (
    <div className={styles.bg}>
      <header>Evil form generator</header>
      <main>
        <Tabs>
          <TabList>
            <Tab>Custom fields</Tab>
            <Tab>Description (Optional)</Tab>
          </TabList>

          <TabPanel className={styles.panel}>
            <header>Add Custom Field</header>
            <article className={styles.btnsArea}>
              <Button
                style="outline"
                className={styles.btn}
                onClick={() => onBtnClick('input')}
              >
                Single-line text
              </Button>

              <Button
                style="outline"
                className={styles.btn}
                onClick={() => onBtnClick('radio')}
              >
                Radio buttom
              </Button>

              <Button
                style="outline"
                className={styles.btn}
                onClick={() => onBtnClick('checkbox')}
              >
                Checkboxes
              </Button>

              <Button
                style="outline"
                className={styles.btn}
                onClick={() => onBtnClick('select')}
              >
                Select
              </Button>

              <Button
                style="outline"
                className={styles.btn}
                onClick={() => onBtnClick('file')}
              >
                File upload
              </Button>

              <Button
                style="outline"
                className={styles.btn}
                onClick={() => onBtnClick('paragraph')}
              >
                Paragraph text
              </Button>
            </article>
          </TabPanel>

          <TabPanel className={styles.panel}>
            <TextArea
              label="Form Description"
              rows="4"
              onChange={(event) => onChangeDescription(event.target.value)}
            />
          </TabPanel>
        </Tabs>


      </main>

    </div>
  )
}

Creator.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
}
