import { Box, List, Paper, Typography } from "@material-ui/core";
import { CSSProperties } from "react";
import { TodoState } from "../models/todos";
import { TodoItem } from "../molecules/TodoItem";

interface TodoListProps {
  todoList: TodoState[];
  isIncompleteList?: boolean;
}

// TodoListコンポーネントを作成
// export const TodoList = ({todoList}:TodoListProps) => {
export const TodoList: React.VFC<TodoListProps> = ({
  todoList,
  isIncompleteList = false,
}: TodoListProps) => {
  const title = isIncompleteList ? "未完了のTODO" : "完了のTODO";

  return (
    <Box mt={2}>
      <Paper>
        <Box p={4}>
          <Typography variant="subtitle1">{title}</Typography>
          <List>
            {todoList.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  content={todo.content}
                  done={todo.done}
                />
              );
            })}
          </List>
        </Box>
      </Paper>
    </Box>
  );
};
