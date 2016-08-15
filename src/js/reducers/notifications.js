import {
  NEW_NOTIFICATION,
  CLEAR_NOTIFICATIONS,
  SAVE_FORM_SUCCESS
} from 'constants'

export default function (state = [], action) {
  const { type, payload } = action

  switch (type) {
  case NEW_NOTIFICATION:
    return [
      // ...state,
      {
        ...payload
      }
    ]

  case CLEAR_NOTIFICATIONS:
    return []

  case SAVE_FORM_SUCCESS:
    return []

  default:
    return state
  }
}
