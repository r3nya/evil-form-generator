import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { default as forms } from './forms'
import newForm from './newForm'
import { default as browser } from './browser'
import { default as notifications } from './notifications'

export default combineReducers({
  routing,
  forms,
  newForm,
  browser,
  notifications
})
