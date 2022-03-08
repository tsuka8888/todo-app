import React, { createContext } from 'react'
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
import axios from 'axios'
import { todoApiEndPoint } from '../../modules/common'

export const TodoContext = createContext(
  {} as {
    todoList: TodoState[] | undefined
    setTodoList: React.Dispatch<React.SetStateAction<TodoState[] | undefined>>
  }
)
export const Todos: React.VFC = () => {
  const [todoList, setTodoList] = useState<TodoState[]>()
  const [completeTodoList, setCompleteTodoList] = useState<TodoState[]>()
  const [inCompleteTodoList, setInCompleteTodoList] = useState<TodoState[]>()

  useEffect(() => {
    axios.get(todoApiEndPoint).then((response) => {
      const resTodoList = response.data.Items as TodoState[]
      setTodoList(resTodoList)
      setInCompleteTodoList(
        resTodoList.filter((todo: any) => {
          return todo.done === false
        })
      )
      setCompleteTodoList(
        resTodoList.filter((todo: any) => {
          return todo.done === true
        })
      )
    })
  }, [])

  useEffect(() => {
    if (todoList) {
      setInCompleteTodoList(
        todoList.filter((todo) => {
          return todo.done === false
        })
      )
      setCompleteTodoList(
        todoList.filter((todo) => {
          return todo.done === true
        })
      )
    }
  }, [todoList])

  return (
    <>
      <TodoContext.Provider value={{ todoList, setTodoList }}>
        <Container>
          <Box py={4}>
            <TodoInput></TodoInput>
            <TodoList todoList={inCompleteTodoList} isIncompleteList={true}></TodoList>
            <TodoList todoList={completeTodoList}></TodoList>
          </Box>
        </Container>
      </TodoContext.Provider>
    </>
  )
}
