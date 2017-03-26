import React, { PropTypes } from 'react'
import cx from 'classnames'
import { Button } from 'components/uiToolkit'
import styles from './FieldButtons.css'

const { func } = PropTypes


export const FieldButtons = props => {
  const { onBtnClick } = props

  return (
    <section className={cx('grid grid__between', styles.btnsArea)}>
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

      <div className={cx('cell cell__12of12 cell__md__6of12', styles.btnsCol)}>
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

    </section>
  )
}

FieldButtons.propTypes = {
  onBtnClick: func.isRequired
}
