import { ADD_QUESTION } from 'constants';

export function addQuestion(type = 'input') {
  return dispatch => {
    const question = {
      type
    };

    dispatch({
      type: ADD_QUESTION,
      payload: question
    });
  }
}
