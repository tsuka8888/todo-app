import React, { createContext } from 'react'
import { Container, Box, makeStyles } from '@material-ui/core'
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
import { DefaultPages } from '../../templates/DefaultTemplate'
import { classicNameResolver } from 'typescript'

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'row',
    gap: '0 20px'
  },
  card: {
    minHeight: 400,
  }
})

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

  const classes = useStyles()

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
    <DefaultPages>
      <TodoContext.Provider value={{ todoList, setTodoList }}>
        <Container>
          <Box py={4} className={classes.content}>
            {/* <TodoInput></TodoInput> */}
            <TodoList todoList={inCompleteTodoList} isIncompleteList={true}></TodoList>
            <TodoList todoList={completeTodoList}></TodoList>
          </Box>
        </Container>
      </TodoContext.Provider>
    </DefaultPages>
  )
}
