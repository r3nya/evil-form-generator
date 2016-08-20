import {
  ADD_CHOICE,
  DELETE_CHOICE,
  CHANGE_CHOICE,
  SAVE_FORM_SUCCESS,
  GET_FORM_SUCCESS,
  CLEAN_FIELDS
} from 'constants'

const initialState = []

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
  case ADD_CHOICE:
    return [
      ...state,
      {
        id: state.length ? state.length : 0,
        questionId: payload.questionId,
        value: payload.value
      }
    ]

  case DELETE_CHOICE:
    return state
      .filter(item =>
        !(item.questionId === payload.questionId && item.id === payload.id)
      )

  case CHANGE_CHOICE:
    return state.map(item => (
      item.id === payload.id && item.questionId === payload.questionId ?
        Object.assign({}, item, { value: payload.value }) : item
    ))

  case GET_FORM_SUCCESS:
    return [...payload.choices]

  case SAVE_FORM_SUCCESS:
    return initialState

  case CLEAN_FIELDS:
    return initialState

  default:
    return state
  }
}
