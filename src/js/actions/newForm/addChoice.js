import { ADD_CHOICE } from 'constants'

export function addChoice(questionId, value = '') {
  return dispatch => {
    dispatch({
      type: ADD_CHOICE,
      payload: {
        questionId,
        value
      }
    })
  }
}
