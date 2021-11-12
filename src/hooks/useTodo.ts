import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// 一意なIDを生成する
import { ulid } from "ulid";
import * as todoData from "../apis/todos";
import { TodoState } from "../models/todos";
import { todosSelector } from "../modules/todos";
// import { store } from "../store";

// カスタムフック
export const useTodo = () => {
  // hooks
  const dispatch = useDispatch();

  // selector
  const todoList = useSelector(todosSelector);

  // TODOが未完了の配列を作成
  const inCompleteList = todoList.filter((todo: TodoState) => {
    return !todo.done;
  });

  // TODOが完了の配列を作成
  const completeList = todoList.filter((todo: TodoState) => {
    return todo.done;
  });

  // Todo取得
  const fetchTodos = useCallback(
    () => dispatch(todoData.getAllTodosData()),
    [dispatch]
  );

  // todoListItemのdoneを反転させて登録する
  // todoListが変わったら、関数を再作成
  const toggleTodoListItemStatus = useCallback(
    (todo: TodoState) => {
      const todoItem = todoList.find((item) => item.id === todo.id);
      if (!todoItem) return false;
      const newTodoItem = { ...todoItem, done: !todo.done };

      dispatch(todoData.updateTodoData(newTodoItem));
    },
    [dispatch, todoList]
  );

  // 新規Todoを追加する
  const addTodoListItem = useCallback(
    (todoContent: string) => {
      const newTodoItem: TodoState = {
        id: Number(ulid()),
        content: todoContent,
        done: false,
      };
      dispatch(todoData.addTodoData(newTodoItem));
    },
    [dispatch]
  );

  // Todoを削除する
  const deleteTodoListItem = useCallback(
    (id: number) => dispatch(todoData.deleteTodoData(id)),
    [dispatch]
  );

  return {
    todoList,
    inCompleteList,
    completeList,
    fetchTodos,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };
};
