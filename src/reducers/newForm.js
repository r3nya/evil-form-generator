import {
  ADD_QUESTION,
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

  default:
    return state;
  }
}
