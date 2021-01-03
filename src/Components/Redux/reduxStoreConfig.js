import { createStore, applyMiddleware } from 'redux';
import { storeReducer } from './Reducers/storeReducer'

const ReduxStore = createStore(
  storeReducer,
  applyMiddleware()
)
export default ReduxStore;