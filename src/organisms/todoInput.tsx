import { IconButton, Paper, TextField, Typography } from "@material-ui/core";
import { Create } from "@material-ui/icons";
import { ChangeEventHandler, CSSProperties, useCallback, useState } from "react";
import { useTodo } from "../hooks/useTodo";

export const TodoInput: React.VFC = () => {
  ("");

  // style
  const styles: { [name: string]: CSSProperties } = {
    paper: {
      // "textAlign": "center",
      padding: "16px 32px",
    },
  };

  // state
  const [todo, setTodo] = useState("");
  const { addTodoListItem } = useTodo();

  const onChangeInput = useCallback(
    (e: any) => {
      setTodo(e.target.value);
    },
    [setTodo]
  );

  const onClickCreate = useCallback(() => {
    addTodoListItem(todo);
    setTodo("");
  }, [addTodoListItem, todo]);

  return (
    <>
      <Paper style={styles.paper}>
        <Typography variant="h6">TODO進捗管理</Typography>
        <TextField
          id="standard-basic"
          label="Todo"
          variant="standard"
          value={todo}
          onChange={onChangeInput}
        />
        <IconButton onClick={onClickCreate}>
          <Create />
        </IconButton>
      </Paper>
    </>
  );
};
