import { combineReducers } from 'redux'
import filterPanel from './filterPanel'
import dashboard from './dashboard'
import flightDetail from './flightDetail'

export default combineReducers({
  filterPanel,
  dashboard,
  flightDetail
})
