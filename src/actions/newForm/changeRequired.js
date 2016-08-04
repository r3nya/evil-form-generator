import { CHANGE_REQUIRED } from 'constants';

export function changeRequired(payload) {
  return dispatch => {
    dispatch({
      type: CHANGE_REQUIRED,
      payload
    });
  };
}
