import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PopularMovies from '../components/PopularMovies'
import {SHOW_POPULAR,SHOW_MOVIE,SHOW_FAVORITES} from '../constants/Visibility'
import * as getPopularActions from '../actions/loadPopularActions'
import * as visibilityFilter from '../actions/visibilityFilter'

function getObjByVisFilter(movie, popular, favorites, filter){
  switch (filter) {
    case SHOW_POPULAR:
      return popular
    case SHOW_MOVIE:
      return movie
    case SHOW_FAVORITES:
      return favorites
    default:
      return popular
  }
}


function mapStateToProps(state){
  return {
    information: getObjByVisFilter(state.movie,state.popular,state.favorites,state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch){
  return {
    popularActions: bindActionCreators(getPopularActions, dispatch),
    visibilityActions: bindActionCreators(visibilityFilter, dispatch)
  }
}

const Popular = connect(mapStateToProps,mapDispatchToProps)(PopularMovies)
export default Popular
