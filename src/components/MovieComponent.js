import React from 'react'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router'
import RecomendationsComponent from './RecomendationsComponent'
import movieStyle from '../styles/movie.css'

export default class MovieComponent extends React.Component{
  componentWillMount(){
    const {loadMovie} = this.props.movieAction
    loadMovie(this.props.movieId)
  }
  componentWillReceiveProps(newProps){
    if(newProps.movieId === this.props.movieId){
      return false
    }else{
      const {loadMovie} = this.props.movieAction
      loadMovie(newProps.movieId)
    }
  }
  render(){
    const {movie} = this.props
    const {recomendations, movieId, recomendationsAction} = this.props
    const genres = movie.get('genres')
    var gen_lst = '';
    if(typeof genres != 'undefined'){
      genres.forEach((item)=>{
            gen_lst += item.get('name')+' '
      })
    }
    return (
      <div className={movieStyle.movie__out}>
        <Link to='/'>to Popular</Link>
        <div className={movieStyle.movie__wrapper}>
          <Paper zDepth={2}>
            <div className={movieStyle.movie__item}>
              <div className={movieStyle.movie__title}>{movie.get('original_title')}({movie.get('original_language')})</div>
              <div>
                <img src={'https://image.tmdb.org/t/p/w500'+movie.get('poster_path')}/>
              </div>
              <b><a href={movie.get('homepage')}>Producer page</a></b>
              <div><b>Release date:</b> {movie.get('release_date')}</div>
              <div><b>Votes:</b> {movie.get('vote_count')}</div>
              <div><b>Average:</b> {movie.get('vote_average')}</div>
              <div>{movie.get('overview')}</div>
              <div><b>Genres:</b> {gen_lst}</div>
            </div>
          </Paper>
          <RecomendationsComponent movieId={movieId} recomendations={recomendations} recomendationsAction={recomendationsAction}/>
        </div>
      </div>
    );
  }
}
