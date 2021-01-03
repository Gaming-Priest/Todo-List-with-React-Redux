import * as actions from './const.js';

export function addtodo(todo) {
  return { type: actions.ADD_TODO, payload: todo }
}

export function edittodo(id) {
  return { type: actions.EDIT_TODO, payload: id }
}

export function deletetodo(id) {
  return { type: actions.DELETE_TODO, payload: id}
}

export function cleartodo() {
  return { type: actions.CLEAR_TODO }
}