import { EDIT_TITLE_QUESTION } from 'constants';

export function editTitleQuestion(payload) {
  return dispatch => {
    dispatch({
      type: EDIT_TITLE_QUESTION,
      payload
    });
  };
}
