import axios from 'axios'
import { TodoState } from './types'

const todoDataUrl = 'https://atk7e5jl02.execute-api.ap-northeast-1.amazonaws.com/prod/todos'

export async function getTodoList() {
  return await axios.get(todoDataUrl)
}

export async function addTodoData(todo: TodoState) {
  return await axios.post(todoDataUrl, todo)
}

export async function updateTodoData(todo: TodoState) {
  return await axios.put(`${todoDataUrl}/${todo.id}`, todo)
}

export async function deleteTodoData(id: string) {
  return await axios.delete(`${todoDataUrl}/${id}`)
}
