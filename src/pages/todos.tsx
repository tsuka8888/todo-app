// import {React} from 'react';
import { useEffect } from "react";
import { getAllTodosData } from "../apis/todos";
import { useTodo } from "../hooks/useTodo";
import { TodoState } from "../models/todos";
import { TodoInput } from "../organisms/todoInput";
import { TodoList } from "../organisms/todoList";

export const Todos = () => {
  const {
    todoList,
    fetchTodosFromDb,
  } = useTodo();

  // 初回レンダリング時のみ
  // 要素が準備できてから
  useEffect(() => {
    // DBからデータを取得し、storeに格納
    getAllTodosData().then((todoList) => {
      fetchTodosFromDb(todoList);
      console.log('初回レンダリング',todoList);
    });
  }, [fetchTodosFromDb]);
  
  // 初期値
  console.log('useEffectの外',todoList);

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
