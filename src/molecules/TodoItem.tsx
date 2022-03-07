import React from 'react'
import { IconButton, ListItem, ListItemText } from '@material-ui/core'
import { TodoState } from '../modules/todos/types'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Check from '@material-ui/icons/Check'
import Restore from '@material-ui/icons/Restore'

export const TodoItem: React.VFC<TodoState> = (todo: TodoState) => {
  return (
    <ListItem>
      <ListItemText>{todo.content}</ListItemText>
      <IconButton>{todo.done ? <Restore /> : <Check />}</IconButton>
      <IconButton>
        <DeleteForever />
      </IconButton>
    </ListItem>
  )
}
