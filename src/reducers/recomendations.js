import { LOAD_RECOMENDATIONS_SUCCES } from '../constants/Recomendations'

export default function recomendations(state=[], action) {
  switch (action.type) {
    case LOAD_RECOMENDATIONS_SUCCES:
      return action.payload
    default:
      return state
  }
}
