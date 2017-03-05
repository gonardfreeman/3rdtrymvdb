import React from 'react'
import { Link } from 'react-router'


export default class MovieComponent extends React.Component{
  componentWillMount(){

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
