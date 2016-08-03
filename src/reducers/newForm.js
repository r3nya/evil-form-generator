import {
  ADD_QUESTION
} from 'constants';

export default function (state = [], action) {
  const { type, payload } = action;

  switch (type) {
  case ADD_QUESTION:
    return [
      ...state,
      payload
    ];

  default:
    return state;
  }
}
