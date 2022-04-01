import React from 'react'
import { Box, IconButton, List, makeStyles, Paper, Typography } from '@material-ui/core'
import { TodoState } from '../modules/todos/types'
import { TodoItem } from '../molecules/TodoItem'
import { InputButton } from '../molecules/InputButton'

const useStyles = makeStyles({
  paper: {
    minWidth: 600,
    minHeight: 600,
    position: 'relative',
  },
  inputButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
})

interface TodoListProps {
  todoList: TodoState[] | undefined
  isIncompleteList?: boolean
}

// TodoListコンポーネントを作成
export const TodoList: React.VFC<TodoListProps> = ({
  todoList,
  isIncompleteList = false,
}: TodoListProps) => {
  const title = isIncompleteList ? '未完了のTODO' : '完了のTODO'
  const classes = useStyles()
  return (
    <Box>
      <Paper className={classes.paper}>
        <Box p={4}>
          <Typography variant="subtitle1">{title}</Typography>
          <List>
            {todoList &&
              todoList.map((todo) => {
                return (
                  <TodoItem key={todo.id} id={todo.id} content={todo.content} done={todo.done} />
                )
              })}
          </List>
          <Box className={classes.inputButton}>
            <InputButton />
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
