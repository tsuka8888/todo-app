// import {React} from 'react';
import { Container, createTheme, Box } from "@material-ui/core";
import { CSSProperties, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTodo } from "../hooks/useTodo";
import { TodoState } from "../models/todos";
import { TodoInput } from "../organisms/TodoInput";
import { TodoList } from "../organisms/TodoList";

export const Todos: React.VFC = () => {
  // styles
  const theme = createTheme();
  const styles: { [name: string]: CSSProperties } = {
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  };

  // hooks
  const { todoList, inCompleteList, completeList, fetchTodos } = useTodo();
  const dispatch = useDispatch();
  useEffect(() => {
    // DBからデータを取得し、storeに格納
    dispatch(() => fetchTodos());
  }, []);

  return (
    <>
      <Container>
        <Box py={4}>
          <TodoInput></TodoInput>
          <TodoList
            todoList={inCompleteList}
            isIncompleteList={true}
          ></TodoList>
          <TodoList todoList={completeList}></TodoList>
        </Box>
      </Container>
    </>
  );
};
