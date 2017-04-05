import fetch from 'isomorphic-fetch'
import {LOAD_MOVIE_SUCCES} from '../constants/Movie'
import {key} from '../key'

function fetchMovie(resp){
  return {
    type: LOAD_MOVIE_SUCCES,
    payload: resp
  }
}


export function loadMovie(id){
  return function(dispatch){
    return fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key='+key+'&language=en-US')
    .then(response =>response.json())
    .then(response=>{
      dispatch(fetchMovie(response))
    })

  }
}
