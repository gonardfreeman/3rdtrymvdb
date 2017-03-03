import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MovieComponent from '../components/MovieComponent'
import * as loadMovieActions from '../actions/loadMovieActions'
import * as visibilityFilter from '../actions/visibilityFilter'

function mapStateToProps(state){
  return {
    movie: state.movie
  }
}

function mapDispatchToProps(dispatch){
  return {
      movieAction: bindActionCreators(loadMovieActions, dispatch),
      visibilityActions: bindActionCreators(visibilityFilter, dispatch)
  }
}


const Movie = connect(mapStateToProps,mapDispatchToProps)(MovieComponent)
export default Movie
