import { createStore, applyMiddleware, compose } from 'redux'
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


export default function configureStore(initialState){
  const logger = createLogger()
  const reducer = compose(
    mergePersistedState()
  )(rootReducer);
  const storage = compose(
    filter('favorites')
  )(adapter(window.localStorage));
  const enhancer = compose(
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger)),
    persistState(storage)
  )
  const store = createStore(
    reducer,
    initialState,
    enhancer
  )
  if(module.hot) {
    module.hot.accept('../reducers/index',()=>{
      const nextRootReducer = require('../reducers')
      store.replaceRducer(nextRootReducer)
    })
  }
  return store
}
