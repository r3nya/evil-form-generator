import {
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_ERROR
} from 'constants'
import { loadData } from 'utils'
import { get } from 'lodash'
import { push } from 'react-router-redux'

export function fetchItem(id) {
  return dispatch => {
    dispatch({
      type: FETCH_ITEM
    })

    const forms = loadData('forms')

    if (get(forms, `data[${id}]`) && typeof id === 'number') {
      const length = forms.data.length

      if (id > length) {
        dispatch(push('/404'))
      }

      dispatch({
        type: FETCH_ITEM_SUCCESS,
        payload: forms.data[id]
      })
    } else {
      dispatch({
        type: FETCH_ITEM_ERROR
      })
      dispatch(push('/404'))
    }
  }
}
