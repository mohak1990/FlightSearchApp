import { combineReducers } from 'redux'
import filterPanel from './filterPanel'
import dashboard from './dashboard'
import ui from './ui'

export default combineReducers({
  filterPanel,
  dashboard,
  ui
})
