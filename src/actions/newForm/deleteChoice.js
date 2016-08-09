import { DELETE_CHOICE } from 'constants'

export function deleteChoice(id, number) {
  return dispatch => {
    console.log('action', id, number)
    dispatch({
      type: DELETE_CHOICE,
      payload: {
        id,
        number
      }
    })
  }
}
