// import {React} from 'react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTodo } from "../hooks/useTodo";
import { TodoState } from "../models/todos";
import { TodoInput } from "../organisms/todoInput";
import { TodoList } from "../organisms/todoList";

export const Todos: React.VFC = () => {
  const { todoList, fetchTodos } = useTodo();

  const dispatch = useDispatch();

  useEffect(() => {
    // DBからデータを取得し、storeに格納
    dispatch(fetchTodos());
  }, [dispatch, fetchTodos]);

  // TODOが未完了の配列を作成
  const inCompleteList = todoList.filter((todo: TodoState) => {
    return !todo.done;
  });

  // TODOが完了の配列を作成
  const completeList = todoList.filter((todo: TodoState) => {
    return todo.done;
  });

  return (
    <>
      <TodoInput></TodoInput>
      <TodoList todoList={inCompleteList} isIncompleteList={true}></TodoList>
      <TodoList todoList={completeList}></TodoList>
    </>
  );
};
