import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todosSelector } from '../modules/todos/selectors'
import { getTodoList, addTodoData } from '../modules/todos/operations'
import { TodoState } from '../modules/todos/types'

// カスタムフック
export const useTodo = () => {
  // hooks
  const dispatch = useDispatch()

  // Todo取得
  const fetchTodos = useCallback(() => dispatch(getTodoList()), [dispatch])

  // Todo作成
  const createTodo = useCallback((body: TodoState) => dispatch(addTodoData(body)), [dispatch])

  return {
    fetchTodos,
    createTodo,
  }
}
