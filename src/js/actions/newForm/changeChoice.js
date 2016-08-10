import { CHANGE_CHOICE } from 'constants'

export function changeChoice(id, number, value) {
  return dispatch => {
    dispatch({
      type: CHANGE_CHOICE,
      payload: {
        id,
        number,
        value
      }
    })
  }
}
