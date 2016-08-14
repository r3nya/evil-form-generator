import { DELETE_CHOICE } from 'constants'

export function deleteChoice(id, number) {
  return dispatch => {
    console.log('delete', id, number)
    dispatch({
      type: DELETE_CHOICE,
      payload: {
        id,
        number
      }
    })
  }
}
