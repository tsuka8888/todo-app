import React from 'react'
import { Container, Box } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useTodo } from '../../hooks/useTodo'
import { TodoInput } from '../../organisms/TodoInput'
import { TodoList } from '../../organisms/TodoList'
import { useSelector } from 'react-redux'
import { todosSelector } from '../../modules/todos'
import { TodoState } from '../../modules/todos/types'
import { InitialState } from '../../modules/loading/reducers'
import { RootState } from '../../store'

export const Todos: React.VFC = () => {
  const { fetchTodos } = useTodo()
  const storeTodo = useSelector((state:RootState) => state.TodosReducer.todoList)
  const [completeTodoList, setCompleteTodoList] = useState<TodoState[]>()
  const [inCompleteTodoList, setInCompleteTodoList] = useState<TodoState[]>()

  useEffect(() => {
    fetchTodos()
  }, [])

  useEffect(() => {
    setInCompleteTodoList(storeTodo.filter((todo)=>{
      return todo.done === false
    }))
    setCompleteTodoList(storeTodo.filter((todo)=>{
      return todo.done === true
    }))
  }, [storeTodo])

  return (
    <>
      <Container>
        <Box py={4}>
          <TodoInput></TodoInput>
          <TodoList todoList={inCompleteTodoList} isIncompleteList={true}></TodoList>
          <TodoList todoList={completeTodoList}></TodoList>
        </Box>
      </Container>
    </>
  )
}
