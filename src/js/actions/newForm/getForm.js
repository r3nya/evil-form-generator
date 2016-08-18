import {
  GET_FORM,
  GET_FORM_SUCCESS,
  GET_FORM_ERROR
} from 'constants'

import { get } from 'lodash'
import { push } from 'react-router-redux'

export function getForm(id) {
  return (dispatch, getState) => {
    dispatch({
      type: GET_FORM
    })

    const { data } = getState().forms
    const currentForm = data.filter(form => form.id === +id)

    if (get(currentForm, '[0]')) {
      dispatch({
        type: GET_FORM_SUCCESS,
        payload: currentForm[0]
      })
    } else {
      dispatch({
        type: GET_FORM_ERROR
      })
      dispatch(push('/404'))
    }
  }
}
