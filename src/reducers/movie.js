import {LOAD_MOVIE_SUCCES} from '../constants/Movie'

export default function favorites(state=[], action){
  switch (action.type) {
    case LOAD_MOVIE_SUCCES:
      return action.payload
    default:
      return state
  }
}
