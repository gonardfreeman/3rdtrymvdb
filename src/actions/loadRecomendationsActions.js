import fetch from 'isomorphic-fetch'
import { LOAD_RECOMENDATIONS_SUCCES } from '../constants/Recomendations'
import {key} from '../key'

function fetchRecomendations(resp){
  return {
    type: LOAD_RECOMENDATIONS_SUCCES,
    payload: resp
  }
}

export function loadRecomendation(id){
  return function(dispatch){
    return fetch('https://api.themoviedb.org/3/movie/'+id+'/similar?api_key='+key+'&language=en-US&page=1')
    .then(response=>response.json())
    .then(response=>{
      dispatch(fetchRecomendations(response.results))
    })
  }
}
