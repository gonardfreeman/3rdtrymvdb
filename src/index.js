import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import Popular from './containers/Popular'
import Movie from './containers/Movie'
import Favorites from './containers/Favorites'



const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const muiTheme = getMuiTheme({
  fontFamily: 'Inconsolata'
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
            <Route path='/' component={Popular}/>
            <Route path='/movie/:id' component={Movie}/>
            <Route path='/favorites' component={Favorites}/>
        </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
