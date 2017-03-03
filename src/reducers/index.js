import { combineReducers } from 'redux'
import popular from './popular'
import favorites from './favorites'
import movie from './movie'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  popular,
  favorites,
  movie,
  visibilityFilter
})
