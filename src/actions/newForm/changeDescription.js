import { CHANGE_DESCRIPTION } from 'constants'

export function changeDescription(payload) {
  return dispatch => {
    dispatch({
      type: CHANGE_DESCRIPTION,
      payload
    })
  }
}
