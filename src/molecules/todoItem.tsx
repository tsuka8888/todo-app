import {
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { TodoState } from "../models/todos";
import DeleteForever from "@material-ui/icons/DeleteForever";
import Check from "@material-ui/icons/Check";
import Restore from "@material-ui/icons/Restore";
import { useTodo } from "../hooks/useTodo";
import { useCallback } from "react";

// TodoItemコンポーネントを作成
export const TodoItem: React.VFC<TodoState> = (todo) => {
  const { toggleTodoListItemStatus, deleteTodoListItem } = useTodo();

  const onClickDelete = useCallback(() => {
    deleteTodoListItem(todo.id);
  }, [deleteTodoListItem,todo.id]);

  const onClickToggle = useCallback(() => {
    toggleTodoListItemStatus(todo);
  }, [toggleTodoListItemStatus,todo]);

  return (
    <ListItem>
      <ListItemText>{todo.content}</ListItemText>
      <IconButton onClick={onClickToggle}>
        {todo.done ? <Restore /> : <Check />}
      </IconButton>
      <IconButton onClick={onClickDelete}>
        <DeleteForever />
      </IconButton>
    </ListItem>
  );
};
