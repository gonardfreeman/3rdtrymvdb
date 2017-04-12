import Immutable from 'immutable'
import { LOAD_RECOMENDATIONS_SUCCES } from '../constants/Recomendations'

const initialState = Immutable.List()

export default function recomendations(state=initialState, action) {
  switch (action.type) {
    case LOAD_RECOMENDATIONS_SUCCES:
      return state.merge(action.payload)
    default:
      return state
  }
}
