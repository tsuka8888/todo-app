import { Container, List, Paper } from "@material-ui/core";
import { TodoState } from "../models/todos";
import { TodoItem } from "../molecules/todoItem";
import { TodoTitle } from "../molecules/todoTitle";

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
  const as = "h2";

  return (
    <Paper>
      <Container>
        <TodoTitle title={title} as={as}></TodoTitle>
        <List>
          {todoList.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                content={todo.content}
                done={todo.done}
              ></TodoItem>
            );
          })}
        </List>
      </Container>
    </Paper>
  );
};
