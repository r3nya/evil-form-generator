import { ADD_CHOICE } from 'constants'

export function addChoice(id, value = '') {
  return dispatch => {
    dispatch({
      type: ADD_CHOICE,
      payload: {
        id,
        value
      }
    })
  }
}
