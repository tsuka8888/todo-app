import React from 'react'
import { Container, Box } from '@material-ui/core'
import { useEffect } from 'react'
import { useTodo } from '../../hooks/useTodo'
import { TodoInput } from '../../organisms/TodoInput'
import { TodoList } from '../../organisms/TodoList'

export const Todos: React.VFC = () => {
  const { fetchTodos, todoList, inCompleteTodoList, completeTodoList } = useTodo()
  useEffect(() => {
    fetchTodos()
  }, [])

  console.log(todoList)

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