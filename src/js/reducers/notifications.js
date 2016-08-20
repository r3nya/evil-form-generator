import {
  NEW_NOTIFICATION,
  CLEAR_NOTIFICATIONS,
  SAVE_FORM_SUCCESS,
  CLEAN_FIELDS
} from 'constants'

const initialState = []
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
  case NEW_NOTIFICATION:
    return [
      {
        ...payload
      }
    ]

  case CLEAR_NOTIFICATIONS:
    return initialState

  case SAVE_FORM_SUCCESS:
    return initialState

  case CLEAN_FIELDS:
    return initialState

  default:
    return state
  }
}
