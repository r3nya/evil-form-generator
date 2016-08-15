import { DELETE_CHOICE } from 'constants'

export function deleteChoice(id, number) {
  return dispatch => {
    dispatch({
      type: DELETE_CHOICE,
      payload: {
        id,
        number
      }
    })
  }
}
