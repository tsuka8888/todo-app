// import {React} from 'react';
import { Container, Box } from "@material-ui/core";
import { useEffect } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoInput } from "../organisms/TodoInput";
import { TodoList } from "../organisms/TodoList";

export const Todos: React.VFC = () => {
  // hooks
  const { inCompleteList, completeList, fetchTodos } = useTodo();
  useEffect(() => {
    // DBからデータを取得し、storeに格納
    fetchTodos();
  }, [fetchTodos]);

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
