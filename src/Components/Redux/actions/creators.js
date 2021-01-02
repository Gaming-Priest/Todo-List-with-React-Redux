import * as actions from './const.js';

export function addtodo(todo) {
  return { type: actions.ADD_TODO, newTodo: todo }
}

export function edittodo() {
  return { type: actions.EDIT_TODO }
}

export function cleartodo() {
  return { type: actions.CLEAR_TODO }
}