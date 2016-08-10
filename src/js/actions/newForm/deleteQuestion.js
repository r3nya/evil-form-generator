import { DELETE_QUESTION } from 'constants'

export function deleteQuestion(payload) {
  return dispatch => {
    dispatch({
      type: DELETE_QUESTION,
      payload
    })
  }
}
