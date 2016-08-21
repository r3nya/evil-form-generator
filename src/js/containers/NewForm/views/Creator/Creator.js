import React, { PropTypes } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import StickyDiv from 'react-stickydiv'
import { TextArea } from 'components/uiToolkit'
import { FieldButtons } from '../'
import cx from 'classnames'
import styles from './Creator.css'

export const Creator = props => {
  Tabs.setUseDefaultStyles(false)
  const { description, onBtnClick, onChangeDescription } = props

  return (
    <StickyDiv>
      <aside>
        <Tabs>
          <TabList className={styles.tabsBar}>
            <Tab className={styles.tab}>Custom fields</Tab>
            <Tab className={styles.tab}>
              Description <span className={styles.optional}>&nbsp;(Optional)</span>
            </Tab>
          </TabList>

          <TabPanel className={cx('grid', styles.panel)}>
            <div className="cell cell__12of12 grid grid__center">
              <section className={styles.help}>
                Select fields will be added to form
              </section>

              <header>
                <h3>Add Custom Field</h3>
              </header>

              <FieldButtons
                onBtnClick={onBtnClick}
              />

            </div>
          </TabPanel>

          <TabPanel className={cx(styles.textAreaPanel, styles.panel)}>
            <section className={styles.help}>
              Optional form description
            </section>

            <TextArea
              label="Form Description"
              value={description}
              rows="5"
              onChange={(event) => onChangeDescription(event.target.value)}
            />
          </TabPanel>
        </Tabs>
      </aside>
    </StickyDiv>
  )
}

Creator.propTypes = {
  description: PropTypes.string,
  onBtnClick: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
}
