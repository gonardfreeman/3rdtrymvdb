import React from 'react'
import Movie from '../containers/Movie'
import Favorites from '../containers/Favorites'
import Popular from '../containers/Popular'

export default class App extends React.Component{
  render(){
    return (
      <div>
        <Popular/>
        <Movie/>
        <Favorites/>  
      </div>
    );
  }
}
