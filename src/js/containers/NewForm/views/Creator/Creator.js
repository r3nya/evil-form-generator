import React, { PropTypes } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { TextArea } from 'components/uiToolkit'
import { FieldButtons } from '../'
import cx from 'classnames'
import styles from './Creator.css'

export const Creator = props => {
  const { onBtnClick, onChangeDescription } = props

  return (
    <div>
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

              <FieldButtons
                onBtnClick={onBtnClick}
              />

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
