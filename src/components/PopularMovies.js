import React from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import {SHOW_POPULAR} from '../constants/Visibility'
import page from '../styles/page.css'


export default class PopularMovies extends React.Component{
  componentWillMount(){
    const {loadPopular} = this.props.popularActions
    const {setVisibilityFilter} = this.props.visibilityActions
    setVisibilityFilter(SHOW_POPULAR)
    loadPopular()
  }
  render(){
      const {information} = this.props
      const movs = information.map((item)=>{
        return (
          <li key={item.title} className={page.list_item}>
            <Link to={'/movie/'+item.id}
                style={{
                textDecoration: 'none',
                color: 'black'
              }}
              >
              <Paper zDepth={2}>
                <div className={page.list_content}>
                  <div className={page.title}>{item.title}</div>
                  <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path}/>
                </div>
              </Paper>
            </Link>
          </li>
        );
    })
    return (
      <div className={page.out}>
        <div className={page.container}>
          <ul className={page.list}>
            {movs}
          </ul>
          {this.props.children}
        </div>
      </div>
    );
  }
}