import {
  FETCH_FORMS,
  FETCH_FORMS_SUCCESS,
  FETCH_FORMS_ERROR,
  SAVE_FORM_SUCCESS
} from 'constants'

const initialState = {
  loading: false,
  data: []
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
  case FETCH_FORMS:
    return {
      ...state,
      loading: true
    }

  case FETCH_FORMS_SUCCESS:
    return {
      ...state,
      loading: false,
      // data: payload
    }

  case FETCH_FORMS_ERROR:
    return {
      ...state,
      loading: false,
      error: payload.err
    }

  case SAVE_FORM_SUCCESS:
    return {
      ...state,
      data: [
        ...state.data,
        {
          id: state.data.length,
          createdAt: new Date().toLocaleString(),
          ...payload
        }
      ]
    }

  default:
    return state
  }
}
