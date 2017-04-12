import Immutable from 'immutable'
import {LOAD_POPULAR_SUCCES} from '../constants/Popular'

const initialState = Immutable.List()

export default function favorites(state = initialState, action){
  switch (action.type) {
    case LOAD_POPULAR_SUCCES:
      return state.merge(action.payload)
    default:
      return state
  }
}
