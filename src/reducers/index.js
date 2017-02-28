import { combineReducers } from 'redux'
import catlist from './categories'
import subcatlist from './subcategories'
import tablist from './tabs'

export default combineReducers({
  catlist,
  subcatlist,
  tablist
})