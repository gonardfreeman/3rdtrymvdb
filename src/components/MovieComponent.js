import React from 'react'
import { Link } from 'react-router'
import {SHOW_MOVIE} from '../constants/Visibility'

export default class MovieComponent extends React.Component{
  componentWillMount(){
    const {setVisibilityFilter} = this.props.visibilityActions
    setVisibilityFilter(SHOW_MOVIE)
  }
  render(){
    return (
      <div>
        <div>Hello world!</div>
        <Link to='/'>to root</Link>
      </div>

    );
  }
}
