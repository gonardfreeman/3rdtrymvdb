import {SET_VISIBILITY, SHOW_POPULAR} from '../constants/Visibility'

export default function vibilityFilter(state=SHOW_POPULAR, action){
  switch (action.type) {
    case SET_VISIBILITY:
      return action.payload
    default:
      return state
  }
}
