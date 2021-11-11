import axios from "axios";
import React from "react";
import { TodoType, TodoItemType } from "../App";

const todoDataUrl: string = "http://localhost:3100/todos";

export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
};

export const addTodoData = async (todo) => {
  const response = await axios.post(todoDataUrl, todo);
  return response.data;
};

export const deleteTodoData: React.FC<{ id: string }> = async (id) => {
  const response = await axios.delete(`${todoDataUrl}/${id}`);
  return id;
};

export const updateTodoData = async (todo: TodoType) => {
  const response = await axios.put(`${todoDataUrl}/${todo.id}`, todo);
  return response.data;
};
