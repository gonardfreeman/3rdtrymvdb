import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MovieComponent from '../components/MovieComponent'
import * as loadMovieActions from '../actions/loadMovieActions'

function mapStateToProps(state){
  return {
    movie: state.movie
  }
}

function mapDispatchToProps(dispatch){
  return {
      movieAction: bindActionCreators(loadMovieActions, dispatch)
  }
}


const Movie = connect(mapStateToProps,mapDispatchToProps)(MovieComponent)
export default Movie
