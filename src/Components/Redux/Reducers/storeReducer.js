import * as actions from '../actions/const.js';
export const storeReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, { todo: action.newTodo }];
    case actions.EDIT_TODO:
      return;
    case actions.CLEAR_TODO:
      return []
    default:
      return state
  }
};