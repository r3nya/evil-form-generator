import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR
} from 'constants';

const initialState = {
  loading: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_ARTICLES:
    return {
      ...state,
      loading: true
    };

  case FETCH_ARTICLES_SUCCESS:
    return {
      ...state,
      loading: false,
      text: payload.text
    };

  case FETCH_ARTICLES_ERROR:
    return {
      ...state,
      loading: false,
      error: payload.err
    };

  default:
    return state;
  }
}
