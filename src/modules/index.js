import { combineReducers } from 'redux'
import filterPanel from './filterPanel'
import dashboard from './dashboard'

export default combineReducers({
  filterPanel,
  dashboard,
})
