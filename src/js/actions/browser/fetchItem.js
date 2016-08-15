import {
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_ERROR
} from 'constants'
import { loadData } from 'utils'
import { get } from 'lodash'

export function fetchItem(id) {
  return dispatch => {
    dispatch({
      type: FETCH_ITEM
    })

    const forms = loadData('forms')

    if (get(forms, `data[${id}]`)) {
      console.log('get', get(forms, `data[${id}]`))
      dispatch({
        type: FETCH_ITEM_SUCCESS,
        payload: forms.data[id]
      })
    } else {
      // TODO redirect 404
      dispatch({
        type: FETCH_ITEM_ERROR
      })
    }
  }
}
