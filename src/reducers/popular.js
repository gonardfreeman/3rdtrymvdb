import {LOAD_POPULAR_SUCCES} from '../constants/Popular'

export default function favorites(state=[], action){
  switch (action.type) {
    case LOAD_POPULAR_SUCCES:
      return action.payload
    default:
      return state
  }
}
