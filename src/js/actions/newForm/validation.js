import {
  VALIDATION,
  NEW_NOTIFICATION,
  CLEAR_NOTIFICATIONS
} from 'constants'

import { uniqBy } from 'lodash'

function newNotification(type, message) {
  return {
    type: NEW_NOTIFICATION,
    payload: {
      type,
      message
    }
  }
}

export function validation() {
  return (dispatch, getState) => {
    dispatch({
      type: VALIDATION
    })

    const { questions, choices } = getState().newForm

    if (!questions.length) {
      const message = 'Empty form …'
      dispatch(newNotification('danger', message))
      throw new Error(message)
    }

    /* eslint-disable array-callback-return */
    questions.map(q => {
      if (!q.title) {
        const message = 'Title field must be filled'
        dispatch(newNotification('danger', message))
        throw new Error(message)
      }

      if (q.type === 'checkbox' || q.type === 'radio' || q.type === 'select') {
        const currentChoices = choices.filter(item => item.questionId === q.id)

        if (!currentChoices.length) {
          const message = 'Choices must not be empty'
          dispatch(newNotification('danger', message))
          throw new Error(message)
        }

        if (currentChoices.length !== uniqBy(currentChoices, 'value').length) {
          const message = 'Choices must be unique'
          dispatch(newNotification('danger', message))
          throw new Error(message)
        }
      }
    })
    /* eslint-enable array-callback-return */
  }
}

export function clearNotifications() {
  return dispatch => {
    dispatch({
      type: CLEAR_NOTIFICATIONS
    })
  }
}
