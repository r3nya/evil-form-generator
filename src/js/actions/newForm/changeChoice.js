import { CHANGE_CHOICE } from 'constants'

export function changeChoice(id, questionId, value) {
  return dispatch => {
    dispatch({
      type: CHANGE_CHOICE,
      payload: {
        id,
        questionId,
        value
      }
    })
  }
}
