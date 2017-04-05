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
  componentDidMount(){
    const {loadMovie} = this.props.movieAction
    loadMovie(this.props.movieId)
  }
  render(){
    const {movie} = this.props
    const {recomendations, movieId, recomendationsAction} = this.props
    const {genres} = movie
    var gen_lst = '';
    if(typeof genres != 'undefined'){
      genres.forEach((item)=>{
            gen_lst += item.name+' '
      })
    }
    return (
      <div className={movieStyle.movie__out}>
        <Link to='/'>to Popular</Link>
        <div className={movieStyle.movie__wrapper}>
          <Paper zDepth={2}>
            <div className={movieStyle.movie__item}>
              <div className={movieStyle.movie__title}>{movie.original_title}({movie.original_language})</div>
              <div>
                <img src={'https://image.tmdb.org/t/p/w500'+movie.poster_path}/>
              </div>
              <b><a href={movie.homepage}>Producer page</a></b>
              <div><b>Release date:</b> {movie.release_date}</div>
              <div><b>Votes:</b> {movie.vote_count}</div>
              <div><b>Average:</b> {movie.vote_average}</div>
              <div>{movie.overview}</div>
              <div><b>Genres:</b> {gen_lst}</div>
            </div>
          </Paper>
          <RecomendationsComponent movieId={movieId} recomendations={recomendations} recomendationsAction={recomendationsAction}/>
        </div>
      </div>
    );
  }
}
