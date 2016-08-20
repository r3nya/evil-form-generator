import React, { PropTypes } from 'react'
import { Input, TextArea, SelectElement } from 'components/uiToolkit'
import ReactTooltip from 'react-tooltip'
import cx from 'classnames'
import styles from './QuestionViewer.css'

export const QuestionViewer = props => {
  const { type, title, required, choices } = props

  return (
    <div className={cx('grid grid__column', styles.item)}>
      <h4 className={cx('cell cell__12of12', styles.h4)}>
        {required &&
          <span
            className={styles.asterisk}
            data-tip="Required"
          >
            *&nbsp;
            <ReactTooltip />
          </span>
        }
        {title}
      </h4>
      <div className={styles.subj}>
        {(type === 'file' || type === 'input') &&
          <Input
            type={type}
          />
        }

        {type === 'paragraph' &&
          <TextArea
            rows="4"
          />
        }

        {(type === 'checkbox' || type === 'radio') &&
          choices.map(item => (
            <label key={item.id}>
              <Input
                type={type}
              />
              {item.value}
            </label>
          ))
        }

        {type === 'select' &&
          <SelectElement
            options={choices}
          />
        }
      </div>
    </div>
  )
}

QuestionViewer.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  choices: PropTypes.array,
}
