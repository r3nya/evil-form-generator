import {
  ADD_QUESTION,
  CHANGE_REQUIRED,
  DELETE_QUESTION,
  EDIT_TITLE_QUESTION
} from 'constants';

export default function (state = [], action) {
  const { type, payload } = action;

  switch (type) {
  case ADD_QUESTION:
    return [
      ...state,
      {
        id: state.reduce((maxId, q) => Math.max(q.id, maxId), -1) + 1,
        required: false,
        ...payload
      }
    ];

  case DELETE_QUESTION:
    return state.filter(q => q.id !== payload.id);

  case EDIT_TITLE_QUESTION:
    return state.map(q => (
      q.id === payload.id ?
        Object.assign({}, q, { title: payload.newTitle }) : q
    ));

  case CHANGE_REQUIRED:
    return state.map(q => (
      q.id === payload.id ?
        Object.assign({}, q, { required: payload.required }) : q
    ));

  default:
    return state;
  }
}
