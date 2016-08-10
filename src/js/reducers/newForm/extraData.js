import { CHANGE_DESCRIPTION } from 'constants'

export default function (state = {}, action) {
  const { type, payload } = action

  switch (type) {
  case CHANGE_DESCRIPTION:
    return {
      ...state,
      description: payload
    }

  default:
    return state
  }
}
