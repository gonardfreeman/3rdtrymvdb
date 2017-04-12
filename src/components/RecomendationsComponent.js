import React from 'react'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router'
import movieStyle from '../styles/movie.css'

export default class RecomendationsComponent extends React.Component {
  componentWillMount(){
    const {loadRecomendation} = this.props.recomendationsAction
    loadRecomendation(this.props.movieId)
  }
  componentWillReceiveProps(newProps){
    if(newProps.movieId === this.props.movieId){
      return false
    }else{
      const {loadRecomendation} = this.props.recomendationsAction
      loadRecomendation(newProps.movieId)
    }
  }
  render(){
    const {recomendations}=this.props
    if(recomendations.length > 0){
      const rec = recomendations.map((item)=>{
        return(
          <li key={item.id} className={movieStyle.recomendation__list}>
            <Link to={{
              pathname:'/movie/'+item.id
            }}
                style={{
                textDecoration: 'none',
                color: 'black'
              }}
              >
              <div className={movieStyle.movie__title}>{item.original_title}</div>
              <img src={'https://image.tmdb.org/t/p/w600'+item.poster_path}/>
            </Link>
          </li>
        );
      })
      return(
        <div className={movieStyle.movie__wrapper}>
          <Paper zDepth={2}>
            <div className={movieStyle.movie__item+' '+movieStyle.recomendation__item}>
              <div className={movieStyle.movie__title}>Recomendations</div>
              <ul>{rec}</ul>
            </div>
          </Paper>
        </div>
      );
    }else{
      const rec = ()=>{
        return (<div></div>)
      }
      return (
        <div>{rec}</div>
      )
    }


  }
}
