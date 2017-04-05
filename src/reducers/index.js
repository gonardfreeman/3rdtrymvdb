import { combineReducers } from 'redux'
import popular from './popular'
import favorites from './favorites'
import movie from './movie'
import visibilityFilter from './visibilityFilter'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer,
  popular,
  favorites,
  movie,
  visibilityFilter
})
