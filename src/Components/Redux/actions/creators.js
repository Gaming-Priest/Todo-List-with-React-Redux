import * as actions from './const.js';

export function addtodo(todo) {
  return { type: actions.ADD_TODO, newTodo: todo }
}

export function edittodo(id) {
  return { type: actions.EDIT_TODO, id: id }
}

export function deletetodo(id) {
  return { type: actions.DELETE_TODO, id: id}
}

export function cleartodo() {
  return { type: actions.CLEAR_TODO }
}