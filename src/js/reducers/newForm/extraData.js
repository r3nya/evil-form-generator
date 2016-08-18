import {
  CHANGE_DESCRIPTION,
  SAVE_FORM_SUCCESS,
  GET_FORM_SUCCESS,
  CLEAN_FIELDS
} from 'constants'

const initialState = {}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
  case CHANGE_DESCRIPTION:
    return {
      ...state,
      description: payload
    }

  case GET_FORM_SUCCESS:
    return {
      ...state,
      description: payload.description
    }

  case SAVE_FORM_SUCCESS:
    return initialState

  case CLEAN_FIELDS:
    return initialState

  default:
    return state
  }
}
