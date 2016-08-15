import {
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_ERROR
} from 'constants'

const initialState = {
  loading: false,
  data: []
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
  case FETCH_ITEM:
    return {
      ...state,
      loading: true
    }

  case FETCH_ITEM_SUCCESS:
    return {
      ...state,
      loading: false,
      data: payload
    }

  case FETCH_ITEM_ERROR:
    return {
      ...state,
      loading: false
    }

  default:
    return state
  }
}
