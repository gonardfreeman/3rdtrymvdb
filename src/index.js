import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './store/configureStore'
// // import Popular from './containers/Popular'
// import Movie from './containers/Movie'
// import Favorites from './containers/Favorites'
import App from './components/App'

const store = configureStore()

ReactDOM.render(

  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path='/(:filter)' component={App}>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
