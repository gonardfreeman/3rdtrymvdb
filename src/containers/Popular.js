import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PopularMovies from '../components/PopularMovies'
import * as getPopularActions from '../actions/loadPopularActions'


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
