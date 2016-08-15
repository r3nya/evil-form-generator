import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { default as forms } from './forms'
import newForm from './newForm'
import { default as browser } from './browser'

export default combineReducers({
  routing,
  forms,
  newForm,
  browser
})
