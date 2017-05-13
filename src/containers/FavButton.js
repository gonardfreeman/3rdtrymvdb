import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import FavButtonComponent from '../components/FavButtonComponent'

function mapStateToProps(state){
  return {
      fav: state
  }
}
// function mapDispatchToProps(dispatch){
//   return {
//     faver: state
//   }
// }
const FavButton = connect(mapStateToProps/*, mapDispatchToProps*/)(FavButtonComponent)
export default FavButton
