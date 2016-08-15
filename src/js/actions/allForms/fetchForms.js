import {
  FETCH_FORMS,
  FETCH_FORMS_SUCCESS,
  // FETCH_FORMS_ERROR
} from 'constants'
import { loadData } from 'utils'


export function fetchForms() {
  return dispatch => {
    dispatch({ type: FETCH_FORMS })

    const forms = loadData('forms')

    dispatch({
      type: FETCH_FORMS_SUCCESS,
      payload: forms
    })
  }
}
