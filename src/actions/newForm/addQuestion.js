import { ADD_QUESTION } from 'constants';

export function addQuestion(title = 'Hello', choices, require = false) {
  return dispatch => {
    const question = {
      title,
      choices,
      require
    };

    dispatch({
      type: ADD_QUESTION,
      payload: question
    });
  }
}
