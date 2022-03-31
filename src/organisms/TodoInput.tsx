import React from 'react'
import { IconButton, Paper, TextField, Typography } from '@material-ui/core'
import { Create } from '@material-ui/icons'
import { CSSProperties, useState } from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoState } from '../modules/todos/types'
import { ulid } from 'ulid'

export const TodoInput: React.VFC = () => {
  // style
  const styles: { [name: string]: CSSProperties } = {
    paper: {
      padding: '16px 32px',
    },
  }

  const { addTodoData } = useTodo()
  const [todo, setTodo] = useState<string>('')

  const onChangeTodo = (e: any) => {
    setTodo(e.target.value)
  }

  const onClickCreateButton = async () => {
    const body: TodoState = {
      id: ulid(),
      content: todo,
      done: false,
    }
    await addTodoData(body)
  }

  return (
    <>
      <Paper style={styles.paper}>
        <Typography variant="h6">TODO進捗管理</Typography>
        <TextField
          id="standard-basic"
          label="Todo"
          variant="standard"
          value={todo}
          onChange={onChangeTodo}
        />
        <IconButton onClick={onClickCreateButton}>
          <Create />
        </IconButton>
      </Paper>
    </>
  )
}
