import axios from "axios";
// import React from "react";
import { TodoState } from "../models/todos";
import { TodosActionCreators } from "../modules/todos";

const todoDataUrl: string = "http://localhost:3100/todos";

export function getAllTodosData(): (dispatch: any) => any {
  return (dispatch) => {
    axios.get<TodoState[]>(todoDataUrl).then((response) => {
      dispatch(TodosActionCreators.fetchTodosFromDbAction(response.data));
    });
  };
}

export function addTodoData(
  todo: TodoState
): (dispatch: any, getState: any) => any {
  return async (dispatch, getState) => {
    const state = getState();
    const todoList: TodoState[] = state.todos.todoList;
    await axios
      .post<TodoState>(todoDataUrl, todo)
      .then((response) =>
        dispatch(
          TodosActionCreators.addTodosAction([...todoList, response.data])
        )
      );
  };
}

export function deleteTodoData(
  id: number
): (dispatch: any, getState: any) => any {
  return async (dispatch, getState) => {
    await axios.delete<number>(`${todoDataUrl}/${id}`).then(() => {
      const state = getState();
      const todoList: TodoState[] = state.todos.todoList;
      const newTodoList = todoList.filter((item) => item.id !== id);
      dispatch(TodosActionCreators.deleteTodosAction(newTodoList));
    });
  };
}

export function updateTodoData(
  todo: TodoState
): (dispatch: any, getState: any) => any {
  return async (dispatch, getState) => {
    await axios
      .put<TodoState>(`${todoDataUrl}/${todo.id}`, todo)
      .then((response) => {
        const state = getState();
        const todoList: TodoState[] = state.todos.todoList;
        const newTodoList = todoList.map((item) => {
          return item.id !== response.data.id ? item : response.data;
        });
        dispatch(TodosActionCreators.updateTodosAction(newTodoList));
      });
  };
}
