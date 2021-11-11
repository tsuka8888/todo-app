import { TodoState } from "../models/todos";

// Action type
const FETCH_TODOS = "FETCH_TODOS" as const;
const FETCH_TODOS_FROM_DB = "FETCH_TODOS_FROM_DB" as const;
const UPDATE_TODOS = "UPDATE_TODOS" as const;
const ADD_TODOS = "ADD_TODOS" as const;
const DELETE_TODOS = "DELETE_TODOS" as const;

// Action Creator
export function fetchTodosAction() {
  return {
    type: FETCH_TODOS,
  };
}
export function fetchTodosFromDbAction(todos: TodoState[]) {
  return {
    type: FETCH_TODOS_FROM_DB,
    payload: { todos },
  };
}
export function updateTodosAction(todos: TodoState[]) {
  return {
    type: UPDATE_TODOS,
    payload: { todos },
  };
}
export function addTodosAction(todos: TodoState[]) {
  return {
    type: ADD_TODOS,
    payload: { todos },
  };
}
export function deleteTodosAction(todos: TodoState[]) {
  return {
    type: DELETE_TODOS,
    payload: { todos },
  };
}

export const TodosActionCreators = {
  fetchTodosAction,
  fetchTodosFromDbAction,
  updateTodosAction,
  addTodosAction,
  deleteTodosAction,
};

// Actions
export type FetchTodosAction = ReturnType<typeof fetchTodosAction>;
export type FetchTodosFromDbAction = ReturnType<typeof fetchTodosFromDbAction>;
export type UpdateTodosAction = ReturnType<typeof updateTodosAction>;
export type AddTodosAction = ReturnType<typeof addTodosAction>;
export type DeleteTodosAction = ReturnType<typeof deleteTodosAction>;

type TodosAction =
  | FetchTodosAction
  | FetchTodosFromDbAction
  | UpdateTodosAction
  | AddTodosAction
  | DeleteTodosAction;

// State
const initialState: {
  todoList: TodoState[];
} = {
  todoList: [],
};

// selector
export function todosSelector(rootState: {
  todos: {
    todoList: TodoState[];
  };
}) {
  return rootState.todos.todoList;
}

// Reducer
export const TodosReducer = (
  state = initialState,
  action: TodosAction
): {
  todoList: TodoState[];
} => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
      };
    case FETCH_TODOS_FROM_DB:
      return {
        ...state,
        todoList: action.payload.todos,
      };
    case UPDATE_TODOS:
      return {
        ...state,
        todoList: action.payload.todos,
      };
    case ADD_TODOS:
      return {
        ...state,
        todoList: action.payload.todos,
      };
    case DELETE_TODOS:
      return {
        ...state,
        todoList: action.payload.todos,
      };
    default:
      return { ...state };
  }
};
