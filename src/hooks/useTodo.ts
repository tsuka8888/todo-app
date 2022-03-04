import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todosSelector } from '../modules/todos/selectors'
import { getTodoList, addTodoData } from '../modules/todos/operations'
import { TodoState } from '../modules/todos/types'

// カスタムフック
export const useTodo = () => {
  // hooks
  const dispatch = useDispatch()

  // selector
  const storeTodo = useSelector(todosSelector)
  const todoList = storeTodo?.todoList || []
  const inCompleteTodoList = todoList.filter((todo)=>{
    return todo.done === false
  })
  const completeTodoList = todoList.filter((todo)=>{
    return todo.done === true
  })

  // Todo取得
  const fetchTodos = useCallback(() => dispatch(getTodoList()), [dispatch])

  // Todo作成
  const createTodo = useCallback((body: TodoState) => dispatch(addTodoData(body)), [dispatch])

  return {
    todoList,
    inCompleteTodoList,
    completeTodoList,
    fetchTodos,
    createTodo,
  }
}
