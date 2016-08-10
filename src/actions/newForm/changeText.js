import { CHANGE_TEXT } from 'constants'

export default function (id, text) {
  return dispatch => {
    dispatch({
      type: CHANGE_TEXT,
      payload: {
        id,
        text
      }
    })
  }
}
