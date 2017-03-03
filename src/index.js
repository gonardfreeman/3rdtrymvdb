import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './store/configureStore'
import Popular from './containers/Popular'
import Movie from './containers/Movie'
import Favorites from './containers/Favorites'

const store = configureStore()

ReactDOM.render(

  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path='/' component={Popular}>
          <Route path='/movie/(:id)' component={Movie}/>
          <Route path='/favorites' component={Favorites}/>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
