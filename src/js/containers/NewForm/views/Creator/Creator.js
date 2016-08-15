import React, { PropTypes } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Button, TextArea } from 'components/uiToolkit'
import cx from 'classnames'
import styles from './Creator.css'

export const Creator = props => {
  const { onBtnClick, onChangeDescription } = props

  return (
    <div>
      <header>
        <h2>Evil form generator</h2>
      </header>
      <main>
        <Tabs>
          <TabList>
            <Tab>Custom fields</Tab>
            <Tab>Description (Optional)</Tab>
          </TabList>

          <TabPanel className={cx('grid', styles.panel)}>
            <div className="cell cell__12of12 grid grid__center">
              <header>
                <h3>Add Custom Field</h3>
              </header>
              <article className={cx('grid grid__between', styles.btnsArea)}>
                <div className={cx('cell cell__12of12 cell__md__6of12', styles.btnsCol)}>
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
                    onClick={() => onBtnClick('file')}
                  >
                    File upload
                  </Button>
                </div>

                <div className="cell cell__12of12 cell__md__6of12">
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
                    onClick={() => onBtnClick('paragraph')}
                  >
                    Paragraph text
                  </Button>
                </div>

              </article>
            </div>
          </TabPanel>

          <TabPanel className={cx(styles.textAreaPanel, styles.panel)}>
            <TextArea
              label="Form Description"
              rows="5"
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
