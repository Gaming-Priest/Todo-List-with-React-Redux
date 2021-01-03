import * as actions from '../actions/const.js';


export const storeReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, action.newTodo]
      break;
    case actions.DELETE_TODO:
      let filtered = state.filter(s => s.id !== action.id);
      return filtered;
      break;
    case actions.EDIT_TODO:
      let filtered = state.filter(s => s.id !== action.id);
      return filtered;
      break;
    case actions.CLEAR_TODO:
      return [];
    default:
      return state
  }
};
//