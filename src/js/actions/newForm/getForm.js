import {
  GET_FORM,
  GET_FORM_SUCCESS,
  GET_FORM_ERROR
} from 'constants'

export function getForm(id) {
  return (dispatch, getState) => {
    dispatch({
      type: GET_FORM
    })

    const { data } = getState().forms

    // data.filter(form => form.id !== id)
  }
}
