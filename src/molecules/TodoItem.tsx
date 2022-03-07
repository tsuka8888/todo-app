import React from 'react'
import axios from 'axios'
import { IconButton, ListItem, ListItemText } from '@material-ui/core'
import { TodoState } from '../modules/todos/types'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Check from '@material-ui/icons/Check'
import Restore from '@material-ui/icons/Restore'
import { todoApiEndPoint } from '../modules/common'

export const TodoItem: React.VFC<TodoState> = (todo: TodoState) => {
  // const onClickRestore = () => {}
  const onClickCheck = () => {
    const body: TodoState = {
      ...todo,
      done: !todo.done,
    }
    axios.put(`${todoApiEndPoint}/${todo.id}`, body)
  }

  return (
    <ListItem>
      <ListItemText>{todo.content}</ListItemText>
      <IconButton>{todo.done ? <Restore /> : <Check onClick={onClickCheck} />}</IconButton>
      <IconButton>
        <DeleteForever />
      </IconButton>
    </ListItem>
  )
}
