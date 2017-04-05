import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MovieComponent from '../components/MovieComponent'
import * as loadMovieActions from '../actions/loadMovieActions'
import * as loadRecomendationActions from '../actions/loadRecomendationsActions'


function mapStateToProps(state, ownProps){
  return {
    movie:  state.movie,
    movieId: ownProps.params.id,
    recomendations: state.recomendations
  }
}

function mapDispatchToProps(dispatch){
  return {
      movieAction: bindActionCreators(loadMovieActions, dispatch),
      recomendationsAction: bindActionCreators(loadRecomendationActions, dispatch)
  }
}


const Movie = connect(mapStateToProps,mapDispatchToProps)(MovieComponent)
export default Movie
