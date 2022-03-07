import * as TYPE from './types'

export const FETCH_TODO_LIST = 'FETCH_TODO_LIST' as const
export const FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS' as const
export const FETCH_TODO_LIST_ERROR = 'FETCH_TODO_LIST_ERROR' as const
export const FETCH_TODO = 'FETCH_TODO' as const
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS' as const
export const FETCH_TODO_ERROR = 'FETCH_TODO_ERROR' as const
export const UPDATE_TODO = 'UPDATE_TODO' as const
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS' as const
export const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR' as const
export const ADD_TODO = 'ADD_TODO' as const
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS' as const
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR' as const
export const DELETE_TODO = 'DELETE_TODO' as const
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS' as const
export const DELETE_TODO_ERROR = 'DELETE_TODO_ERROR' as const

// Action Creator
export function fetchTodoListAction() {
  return {
    type: FETCH_TODO_LIST,
  }
}
export function fetchTodoListSuccessAction(todos: TYPE.TodoState[]) {
  return {
    type: FETCH_TODO_LIST_SUCCESS,
    payload: todos,
  }
}
export function fetchTodoListErrorAction() {
  return {
    type: FETCH_TODO_LIST_ERROR,
  }
}
export function fetchTodoAction() {
  return {
    type: FETCH_TODO,
  }
}
export function fetchTodoSuccessAction(todos: TYPE.TodoState[]) {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: todos,
  }
}
export function fetchTodoErrorAction() {
  return {
    type: FETCH_TODO_ERROR,
  }
}
export function updateTodoAction() {
  return {
    type: UPDATE_TODO,
  }
}
export function updateTodoSuccessAction() {
  return {
    type: UPDATE_TODO_SUCCESS,
  }
}
export function updateTodoErrorAction() {
  return {
    type: UPDATE_TODO_ERROR,
  }
}
export function addTodoAction() {
  return {
    type: ADD_TODO,
  }
}
export function addTodoSuccessAction() {
  return {
    type: ADD_TODO_SUCCESS,
  }
}
export function addTodoErrorAction() {
  return {
    type: ADD_TODO_ERROR,
  }
}
export function deleteTodoAction() {
  return {
    type: DELETE_TODO,
  }
}
export function deleteTodoSuccessAction() {
  return {
    type: DELETE_TODO_SUCCESS,
  }
}
export function deleteTodoErrorAction() {
  return {
    type: DELETE_TODO_ERROR,
  }
}

export type TodosAction =
  | ReturnType<typeof fetchTodoListAction>
  | ReturnType<typeof fetchTodoListSuccessAction>
  | ReturnType<typeof fetchTodoListErrorAction>
  | ReturnType<typeof fetchTodoAction>
  | ReturnType<typeof fetchTodoSuccessAction>
  | ReturnType<typeof fetchTodoErrorAction>
  | ReturnType<typeof updateTodoAction>
  | ReturnType<typeof updateTodoSuccessAction>
  | ReturnType<typeof updateTodoErrorAction>
  | ReturnType<typeof addTodoAction>
  | ReturnType<typeof addTodoSuccessAction>
  | ReturnType<typeof addTodoErrorAction>
  | ReturnType<typeof deleteTodoAction>
  | ReturnType<typeof deleteTodoSuccessAction>
  | ReturnType<typeof deleteTodoErrorAction>
