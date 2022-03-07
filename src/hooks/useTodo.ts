import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todosSelector } from '../modules/todos/selectors'
import { getTodoList, addTodoData } from '../modules/todos/operations'
import { TodoState } from '../modules/todos/types'
import axios from 'axios'
import { todoApiEndPoint } from '../modules/common'

// カスタムフック
export const useTodo = () => {
  // // hooks
  // const dispatch = useDispatch()

  // // Todo取得
  // const fetchTodos = useCallback(() => dispatch(getTodoList()), [dispatch])

  // // Todo作成
  // const createTodo = useCallback((body: TodoState) => dispatch(addTodoData(body)), [dispatch])

  // return {
  //   fetchTodos,
  //   createTodo,
  // }

  async function getTodoList() {
    await axios.get(todoApiEndPoint)
  }

  async function addTodoData(todo: TodoState) {
    return await axios.post(todoApiEndPoint, todo)
  }

  async function updateTodoData(todo: TodoState) {
    return await axios.put(`${todoApiEndPoint}/${todo.id}`, todo)
  }

  async function deleteTodoData(id: string) {
    return await axios.delete(`${todoApiEndPoint}/${id}`)
  }

  return {
    getTodoList,
    addTodoData,
    updateTodoData,
    deleteTodoData,
  }
}
