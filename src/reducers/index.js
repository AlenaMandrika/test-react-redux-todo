import { combineReducers } from 'redux'
import { todo, filterReducer } from './main'

export default combineReducers({
  items: todo,
  filter: filterReducer
})
