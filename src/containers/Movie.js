import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MovieComponent from '../components/MovieComponent'
import * as loadMovieActions from '../actions/loadMovieActions'
// import { SHOW_POPULAR, SHOW_MOVIE, SHOW_FAVORITES} from '../constants/Visibility'


function mapStateToProps(state, ownProps){
  // console.log(ownProps);
  return {
    movie:  state.movie,
    movieId: ownProps.params.id
  }
}

function mapDispatchToProps(dispatch){
  return {
      movieAction: bindActionCreators(loadMovieActions, dispatch)
  }
}


const Movie = connect(mapStateToProps,mapDispatchToProps)(MovieComponent)
export default Movie
