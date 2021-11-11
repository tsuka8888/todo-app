import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// 一意なIDを生成する
import { ulid } from "ulid";
import * as todoData from "../apis/todos";
import { TodoState } from "../models/todos";
import { TodosActionCreators, todosSelector } from "../modules/todos";
// import { store } from "../store";

// カスタムフック
export const useTodo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(todosSelector);

  // Todo取得
  const fetchTodos = useCallback(
    (value: TodoState[]) => {
      return dispatch(TodosActionCreators.fetchTodosAction());
    },
    [dispatch]
  );
  // TodoをDBから取得
  const fetchTodosFromDb = useCallback(
    (value: TodoState[]) => {
      return dispatch(TodosActionCreators.fetchTodosFromDbAction(value));
    },
    [dispatch]
  );

  // todoListItemのdoneを反転させて登録する
  // todoListが変わったら、関数を再作成
  const toggleTodoListItemStatus = useCallback(
    ({ id, done }: TodoState) => {
      console.log("call", todoList);

      // ボタンを押された
      const todoItem = todoList.find((item) => item.id === id);
      if (!todoItem) return false;

      const newTodoItem = { ...todoItem, done: !done };

      todoData.updateTodoData(newTodoItem).then((updatedTodo) => {
        console.log("db updated", todoList);
        const newTodoList = todoList.map((item) => {
          return item.id !== updatedTodo.id ? item : updatedTodo;
        });
        dispatch(TodosActionCreators.updateTodosAction(newTodoList));
        console.log("dispatched", todoList);
      });
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
      todoData.addTodoData(newTodoItem).then((addTodo) => {
        return dispatch(
          TodosActionCreators.addTodosAction([addTodo, ...todoList])
        );
      });
    },
    [dispatch, todoList]
  );

  // Todoを削除する
  const deleteTodoListItem = useCallback(
    (id: number) => {
      todoData.deleteTodoData(id).then((deletedId) => {
        const newTodoList = todoList.filter((item) => item.id !== deletedId);
        dispatch(TodosActionCreators.deleteTodosAction(newTodoList));
      });
    },
    [dispatch, todoList]
  );

  return {
    todoList,
    fetchTodos,
    fetchTodosFromDb,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };
};
