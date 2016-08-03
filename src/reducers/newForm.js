import {
  ADD_QUESTION,
  DELETE_QUESTION
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

  default:
    return state;
  }
}
