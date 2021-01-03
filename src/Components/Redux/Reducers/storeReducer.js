import * as actions from '../actions/const.js';

const initialStore = {
   todos: [],
   edit: {},
   isEdit: false
}

export const storeReducer = (state = initialStore, action) => {
   switch (action.type) {
      case actions.ADD_TODO:
         return { ...state, todos: [...state.todos, action.payload], isEdit: false }

         case actions.DELETE_TODO:
            let filtered = state.todos.filter(s => s.id !== action.payload);
            return { ...state, todos: filtered }

            case actions.EDIT_TODO:
               let e = state.todos.find(item => item.id === action.payload)

               let selected = state.todos.filter(s => s.id !== action.payload);
               return { todos: selected, edit: e, isEdit: true }

               case actions.CLEAR_TODO:
                  return { todos: [], edit: {}, isEdit: false }
                  default:
                     return state
   }
};
//