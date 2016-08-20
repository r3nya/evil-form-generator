import {
  ADD_QUESTION,
  CHANGE_REQUIRED,
  DELETE_QUESTION,
  EDIT_TITLE_QUESTION,
  DRAG_QUESTION,
  SAVE_FORM_SUCCESS,
  GET_FORM_SUCCESS,
  CLEAN_FIELDS
} from 'constants'

const initialState = []

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
  case ADD_QUESTION:
    return [
      ...state,
      {
        id: state.reduce((maxId, q) => Math.max(q.id, maxId), -1) + 1,
        required: false,
        choices: [],
        ...payload
      }
    ]

  case DELETE_QUESTION:
    return state.filter(q => q.id !== payload.id)

  case EDIT_TITLE_QUESTION:
    return state.map(q => (
      q.id === payload.id ?
        Object.assign({}, q, { title: payload.newTitle }) : q
    ))

  case CHANGE_REQUIRED:
    return state.map(q => (
      q.id === payload.id ?
        Object.assign({}, q, { required: payload.required }) : q
    ))

  case DRAG_QUESTION:
    return payload

  case SAVE_FORM_SUCCESS:
    return initialState

  case CLEAN_FIELDS:
    return initialState

  case GET_FORM_SUCCESS:
    return [...payload.questions]

  default:
    return state
  }
}
