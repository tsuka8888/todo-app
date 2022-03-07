import axios from 'axios'
import { TodoState } from './types'
import * as ACTIONS from './actions'

const todoDataUrl = 'https://atk7e5jl02.execute-api.ap-northeast-1.amazonaws.com/prod/todos'

export function getTodoList(): (dispatch: any) => any {
  return (dispatch) => {
    axios.get(todoDataUrl).then((response) => {
      dispatch(ACTIONS.fetchTodoListSuccessAction(response.data.Items))
    })
  }
}

export function addTodoData(todo: TodoState): (dispatch: any) => any {
  return async (dispatch) => {
    await axios
      .post(todoDataUrl, todo)
      .then(() => dispatch(ACTIONS.addTodoSuccessAction()))
  }
}

export function updateTodoData(todo: TodoState): (dispatch: any) => any {
  return async (dispatch) => {
    await axios.put(`${todoDataUrl}/${todo.id}`, todo).then(() => {
      dispatch(ACTIONS.updateTodoSuccessAction())
    })
  }
}

export function deleteTodoData(id: string): (dispatch: any) => any {
  return async (dispatch) => {
    await axios.delete(`${todoDataUrl}/${id}`).then(() => {
      dispatch(ACTIONS.deleteTodoSuccessAction())
    })
  }
}

