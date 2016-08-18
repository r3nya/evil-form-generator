import { CLEAN_FIELDS } from 'constants'

export function cleanFields() {
  return dispatch => {
    dispatch({
      type: CLEAN_FIELDS
    })
  }
}
