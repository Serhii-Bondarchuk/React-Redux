import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import numberReducer from './numbers/numberReducer'

const store = createStore(numberReducer, composeWithDevTools(
  applyMiddleware()
  // other store enhancers if any
))

export default store 