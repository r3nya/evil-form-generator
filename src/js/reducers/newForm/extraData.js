import { CHANGE_DESCRIPTION, SAVE_FORM_SUCCESS } from 'constants'

const initialState = {}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
  case CHANGE_DESCRIPTION:
    return {
      ...state,
      description: payload
    }

  case SAVE_FORM_SUCCESS:
    return initialState

  default:
    return state
  }
}
