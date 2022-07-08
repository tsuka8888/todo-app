import React from 'react'
import { Container, Box } from '@material-ui/core'
import { useEffect } from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoInput } from '../organisms/TodoInput'
import { TodoList } from '../organisms/TodoList'
import { Header } from '../organisms/Header'

export const Todos: React.VFC = () => {
  // hooks
  const { inCompleteTodoList, completeTodoList, fetchTodos } = useTodo()
  useEffect(() => {
    // DBからデータを取得し、storeに格納
    fetchTodos()
  }, [fetchTodos])

  return (
    <>
      <Header />
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
