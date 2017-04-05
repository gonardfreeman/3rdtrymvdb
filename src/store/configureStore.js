import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


export default function configureStore(initialState){
  const logger = createLogger()
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
  )
  if(module.hot) {
    module.hot.accept('../reducers/index',()=>{
      const nextRootReducer = require('../reducers')
      store.replaceRducer(nextRootReducer)
    })
  }
  return store
}
