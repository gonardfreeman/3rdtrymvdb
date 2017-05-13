import React from 'react'
import Toggle from 'material-ui/Toggle';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class FavButtonComponent extends React.Component {
  favHandler(){
    console.log('Try add to fav')
  }
  render(){
    return(
      <Toggle
        label='My favorite'
        onTouchTap={::this.favHandler}
      />
    )
  }
}
