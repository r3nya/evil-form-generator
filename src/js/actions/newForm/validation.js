import {
  VALIDATION,
  NEW_NOTIFICATION,
  CLEAR_NOTIFICATIONS
} from 'constants'

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

    const { questions } = getState().newForm

    if (!questions.length) {
      const message = 'Empty form …'
      dispatch(newNotification('danger', message))
      throw new Error(message)
    }

    questions.map(q => {
      if (!q.title) {
        const message = 'Title field must be filled'
        dispatch(newNotification('danger', message))
        throw new Error(message)
      }

      if (q.type === 'checkbox' || q.type === 'radio' || q.type === 'select') {
        if (!q.choices.length) {
          const message = 'Choices must not be empty'
          dispatch(newNotification('danger', message))
          throw new Error(message)
        }
      }

      if (q.choices.length !== [...new Set(q.choices)].length) {
        const message = 'Choices must be unique'
        dispatch(newNotification('danger', message))
        throw new Error(message)
      }
    })
  }
}

export function clearNotifications() {
  return dispatch => {
    dispatch({
      type: CLEAR_NOTIFICATIONS
    })
  }
}
