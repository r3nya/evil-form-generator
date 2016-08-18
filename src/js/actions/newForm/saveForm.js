import {
  SAVE_FORM,
  SAVE_FORM_SUCCESS,
  SAVE_FORM_ERROR
} from 'constants'
import { push } from 'react-router-redux'

export function saveForm(id) {
  return (dispatch, getState) => {
    dispatch({ type: SAVE_FORM })

    const { newForm: { questions, extraData: { description } } } = getState()

    if (questions) {
      dispatch({
        type: SAVE_FORM_SUCCESS,
        payload: {
          id,
          description,
          questions
        }
      })
      dispatch(push('/all'))
    } else {
      dispatch({
        type: SAVE_FORM_ERROR,
        payload: {
          errorMessage: 'Ooops!'
        }
      })
    }
  }
}
