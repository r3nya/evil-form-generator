import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { default as home } from './home';

export default combineReducers({
  routing,
  home
});
