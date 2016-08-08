import {
  FETCH_FORMS,
  FETCH_FORMS_SUCCESS,
  // FETCH_FORMS_ERROR
} from 'constants'

export function fetchForms() {
  return dispatch => {
    dispatch({ type: FETCH_FORMS })

    const forms = JSON.parse(localStorage.getItem('forms'))

    // TODO

    dispatch({
      type: FETCH_FORMS_SUCCESS,
      payload: forms
    })
  }
}
