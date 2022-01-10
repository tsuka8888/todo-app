import * as ACTIONS from './actions'
import * as TYPES from './types'

export type InitialState = {
  todoList: TYPES.TodoState[]
}
const initialState: InitialState = {
  todoList: [],
}

export const TodosReducer = (
  state = initialState,
  action: ACTIONS.TodosAction
): {
  todoList: TYPES.TodoState[]
} => {
  switch (action.type) {
    case ACTIONS.FETCH_TODO_LIST_SUCCESS:
      return {
        ...state,
        todoList: action.payload,
      }
    default:
      return { ...state }
  }
}
