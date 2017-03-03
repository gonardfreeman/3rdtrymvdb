import {SET_VISIBILITY} from '../constants/Visibility'

export function setVisibilityFilter(filter){
  return {
    type: SET_VISIBILITY,
    payload: filter
  }
}
