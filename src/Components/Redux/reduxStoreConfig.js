import { createStore, applyMiddleware } from 'redux';
import { storeReducer } from './Reducers/storeReducer'
import { saveState, loadState } from '../../LocalStorage'
import throttle from 'lodash/throttle'
const initialStore = {
   todos: [],
   edit: {},
   isEdit: false
}
const persistedState = loadState()
console.log(persistedState);
const ReduxStore = createStore(
   storeReducer,
   !persistedState ? initialStore : persistedState,
   applyMiddleware()
)
ReduxStore.subscribe(throttle(() => {
   saveState(ReduxStore.getState());
},1000))

export default ReduxStore;