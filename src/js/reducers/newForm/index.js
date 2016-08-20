import extraData from './extraData'
import questions from './questions'
import choices from './choices'
import { combineReducers } from 'redux'

export default combineReducers({
  choices,
  extraData,
  questions
})
