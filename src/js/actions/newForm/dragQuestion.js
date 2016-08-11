import { DRAG_QUESTION } from 'constants'

export function dragQuestion(payload) {
  return dispatch => {
    dispatch({
      type: DRAG_QUESTION,
      payload
    })
  }
}
