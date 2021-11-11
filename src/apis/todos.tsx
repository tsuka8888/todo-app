import axios from "axios";
// import React from "react";
import { TodoState } from "../models/todos";
import { TodosActionCreators } from "../modules/todos";
import { store } from "../store";

const todoDataUrl: string = "http://localhost:3100/todos";

export function getAllTodosData(): (dispatch: any) => any {
  console.log("aaa");
  return (dispatch) => {
    axios.get<TodoState[]>(todoDataUrl).then((response) => {
      dispatch(TodosActionCreators.fetchTodosFromDbAction(response.data));
    });
  };
}

export function addTodoData(todo: TodoState): (dispatch: any) => any {
  return (dispatch) => {
    axios.post<TodoState>(todoDataUrl, todo).then((response) => {
      const { todoList } = store.getState().todos;
      dispatch(
        TodosActionCreators.addTodosAction([...todoList, response.data])
      );
    });
  };
}

export function deleteTodoData(id: number): (dispatch: any) => any {
  return (dispatch) => {
    axios.delete<number>(`${todoDataUrl}/${id}`).then(() => {
      const { todoList } = store.getState().todos;
      const newTodoList = todoList.filter((item) => item.id !== id);
      dispatch(TodosActionCreators.deleteTodosAction(newTodoList));
    });
  };
}

export function updateTodoData(todo: TodoState): (dispatch: any) => any {
  return (dispatch) => {
    axios.put<TodoState>(`${todoDataUrl}/${todo.id}`, todo).then((response) => {
      const { todoList } = store.getState().todos;
      const newTodoList = todoList.map((item) => {
        return item.id !== response.data.id ? item : response.data;
      });
      dispatch(TodosActionCreators.updateTodosAction(newTodoList));
    });
  };
}
