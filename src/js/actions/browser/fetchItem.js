import {
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_ERROR
} from 'constants'
import { loadData } from 'utils'
// import { get } from 'lodash'
import { push } from 'react-router-redux'

export function fetchItem(id) {
  return dispatch => {
    dispatch({
      type: FETCH_ITEM
    })

    const forms = loadData('forms')

    if (forms.data) {
      const form = forms.data.filter(form => form.id !== id)

      if (!form.length) {
        dispatch(push('/404'))
      } else {
        dispatch({
          type: FETCH_ITEM_SUCCESS,
          payload: form[0]
        })
      }
    } else {
      dispatch({
        type: FETCH_ITEM_ERROR
      })
      dispatch(push('/404'))
    }
  }
}
