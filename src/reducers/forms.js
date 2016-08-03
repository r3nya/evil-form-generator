import {
  FETCH_FORMS,
  FETCH_FORMS_SUCCESS,
  FETCH_FORMS_ERROR
} from 'constants';

const initialState = {
  loading: false,
  data: [
    {
      id: 1,
      description: 'hello from FORM',
      questions: [
        {
          title: 'How are you?',
          choices: [
            {
              type: 'radio',
              value: [
                'not bad',
                'lolok',
                'wtf'
              ],
              require: true
            },
            {
              type: 'input',
              require: false
            }
          ]
        },
        {
          title: 'Hope you are well',
          choices: [
            {
              type: 'textArea',
              require: true
            }
          ]
        }
      ]
    }
  ]
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_FORMS:
    return {
      ...state,
      loading: true
    };

  case FETCH_FORMS_SUCCESS:
    return {
      ...state,
      loading: false
    };

  case FETCH_FORMS_ERROR:
    return {
      ...state,
      loading: false,
      error: payload.err
    };

  default:
    return state;
  }
}
