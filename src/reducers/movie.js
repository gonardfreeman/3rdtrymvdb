import Immutable from 'immutable'
import {LOAD_MOVIE_SUCCES} from '../constants/Movie'

const initialState = Immutable.Map()

export default function favorites(state=initialState, action){
  switch (action.type) {
    case LOAD_MOVIE_SUCCES:
      return state.merge(action.payload)
    default:
      return state
  }
}
