import axios from "axios";
// import React from "react";
import { TodoState } from "../models/todos";

const todoDataUrl: string = "http://localhost:3100/todos";

export const getAllTodosData = async () => {
  const response = await axios.get<TodoState[]>(todoDataUrl);
  return response.data;
};

export const addTodoData = async (todo: TodoState) => {
  const response = await axios.post<TodoState>(todoDataUrl, todo);
  return response.data;
};

export const deleteTodoData = async (id: number) => {
  await axios.delete<number>(`${todoDataUrl}/${id}`);
  return id;
};

export const updateTodoData = async (todo: TodoState) => {
  const response = await axios.put<TodoState>(
    `${todoDataUrl}/${todo.id}`,
    todo
  );
  return response.data;
};
