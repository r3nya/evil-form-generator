import { DELETE_CHOICE } from 'constants'

export function deleteChoice(id, questionId) {
  return dispatch => {
    dispatch({
      type: DELETE_CHOICE,
      payload: {
        id,
        questionId
      }
    })
  }
}
