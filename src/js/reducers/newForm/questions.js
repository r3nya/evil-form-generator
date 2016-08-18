import {
  ADD_QUESTION,
  CHANGE_REQUIRED,
  DELETE_QUESTION,
  EDIT_TITLE_QUESTION,
  ADD_CHOICE,
  DELETE_CHOICE,
  CHANGE_CHOICE,
  DRAG_QUESTION,
  SAVE_FORM_SUCCESS,
  GET_FORM_SUCCESS,
  CLEAN_FIELDS
} from 'constants'
import { compact } from 'lodash'

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
        text: '',
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

  case ADD_CHOICE:
    return state.map(q => (
      q.id === payload.id ?
        Object.assign({}, q, {
          choices: [
            ...compact(q.choices),
            payload.value
          ]
        }) : q
    ))

  case DELETE_CHOICE:
    return state.map(q => {
      if (q.id === payload.id) {
        const { number } = payload
        const { choices } = q

        delete choices[number]
      }

      return q
    })

  case CHANGE_CHOICE:
    return state.map(q => {
      if (q.id === payload.id) {
        const { number, value } = payload
        q.choices[number] = value
      }

      return q
    })

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
