import {
  ADD_QUESTION,
  CHANGE_REQUIRED,
  DELETE_QUESTION,
  EDIT_TITLE_QUESTION,
  ADD_CHOICE,
  DELETE_CHOICE,
  CHANGE_CHOICE,
  CHANGE_TEXT,
  DRAG_QUESTION,
  SAVE_FORM_SUCCESS
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
            ...q.choices,
            payload.value
          ]
        }) : q
    ))

  case DELETE_CHOICE:
    return state.map(q => {
      if (q.id === payload.id) {
        const { number } = payload
        const { choices } = q
        console.log('1', choices)
        delete choices[number]
        console.log('2', choices)
        q.choices = [...choices.filter(Boolean)]
        console.log('3', q.choices)
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

  case CHANGE_TEXT:
    return state.map(q => {
      q.id === payload.id ?
        Object.assign({}, q, { text: payload.text }) : q
    })

  case DRAG_QUESTION:
    return payload

  case SAVE_FORM_SUCCESS:
    return initialState

  default:
    return state
  }
}
