import { createStore, applyMiddleware } from 'redux';
import { storeReducer } from './Reducers/storeReducer'

const initialStore = []
const ReduxStore = createStore(
  storeReducer,
  initialStore,
  applyMiddleware()
)
export default ReduxStore;