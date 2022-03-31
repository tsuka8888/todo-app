import React from 'react'
import { Box, List, makeStyles, Paper, Typography } from '@material-ui/core'
import { TodoState } from '../modules/todos/types'
import { TodoItem } from '../molecules/TodoItem'

const useStyles = makeStyles({
  paper: {
    minWidth: 600,
    minHeight: 600,
  }
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
            {todoList && todoList.map((todo) => {
              return <TodoItem key={todo.id} id={todo.id} content={todo.content} done={todo.done} />
            })}
          </List>
        </Box>
      </Paper>
    </Box>
  )
}