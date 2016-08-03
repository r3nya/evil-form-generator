import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { default as forms } from './forms';
import { default as newForm } from './newForm';

export default combineReducers({
  routing,
  forms,
  newForm
});
