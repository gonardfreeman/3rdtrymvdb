import { connect } from 'react-redux'
import FavoritesComponent from '../components/Favorites'

function mapStateToProps(state){
  return {
    favorites: state.favorites
  }
}

const Favorites = connect(mapStateToProps)(FavoritesComponent)
export default Favorites
