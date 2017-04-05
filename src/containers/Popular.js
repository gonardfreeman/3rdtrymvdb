import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PopularMovies from '../components/PopularMovies'
import * as getPopularActions from '../actions/loadPopularActions'
// import { SHOW_POPULAR, SHOW_MOVIE, SHOW_FAVORITES} from '../constants/Visibility'



function mapStateToProps(state){
  return {
    information: state.popular
  }
}

function mapDispatchToProps(dispatch){
  return {
    popularActions: bindActionCreators(getPopularActions, dispatch)
  }
}

const Popular = connect(mapStateToProps,mapDispatchToProps)(PopularMovies)
export default Popular
