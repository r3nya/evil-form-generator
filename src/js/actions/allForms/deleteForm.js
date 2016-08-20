import {
  DELETE_FORM,
  DELETE_FORM_SUCCESS,
  DELETE_FORM_ERROR
} from 'constants'

import { get } from 'lodash'

export function deleteForm(id) {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_FORM
    })

    const { forms } = getState()

    if (get(forms, 'data')) {
      const { data } = forms
      dispatch({
        type: DELETE_FORM_SUCCESS,
        payload: data.filter(item => item.id !== id)
      })
    } else {
      dispatch({
        type: DELETE_FORM_ERROR
      })
    }
  }
}
