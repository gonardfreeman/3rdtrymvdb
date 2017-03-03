import fetch from 'isomorphic-fetch'
import {LOAD_POPULAR_SUCCES} from '../constants/Popular'
import {key} from '../key'

function fetchMovies(resp){
  return {
    type: LOAD_POPULAR_SUCCES,
    payload: resp
  }
}

export function loadPopular(page=1){
  return function(dispatch){
    return fetch('https://api.themoviedb.org/3/movie/popular?page='+page+'&language=en-US&api_key='+key)
    .then(response =>response.json())
    .then(response=>{
      dispatch(fetchMovies(response.results))
    })
  }
}
