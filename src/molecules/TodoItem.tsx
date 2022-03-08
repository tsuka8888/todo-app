import React, { useContext } from 'react'
import axios from 'axios'
import { IconButton, ListItem, ListItemText } from '@material-ui/core'
import { TodoState } from '../modules/todos/types'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Check from '@material-ui/icons/Check'
import Restore from '@material-ui/icons/Restore'
import { todoApiEndPoint } from '../modules/common'
import { TodoContext } from '../pages/Todo/Todos'

export const TodoItem: React.VFC<TodoState> = (todo: TodoState) => {
  
  const { todoList, setTodoList } = useContext(TodoContext)

  const triggerTodo = (id: string, done: boolean): void => {
    if (!todoList) return

    const todoItem = todoList.find((item)=>{
      return item.id === id
    })
    if (!todoItem) return
    const newTodoItem = {...todoItem, done: !todoItem.done}

    const newTodoList = todoList.map((item)=>{
      return item.id === id ? newTodoItem : item
    })
    setTodoList(newTodoList)
  }

  const onClickCheck = () => {
    const body: TodoState = {
      ...todo,
      done: !todo.done,
    }
    axios.put(`${todoApiEndPoint}/${todo.id}`, body).then((response)=>{
      console.log('success')
      triggerTodo(todo.id, !todo.done)
    })
  }

  return (
    <ListItem>
      <ListItemText>{todo.content}</ListItemText>
      <IconButton onClick={onClickCheck}>{todo.done ? <Restore /> : <Check />}</IconButton>
      <IconButton>
        <DeleteForever />
      </IconButton>
    </ListItem>
  )
}
