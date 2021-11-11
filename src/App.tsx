import React, { useEffect, useState } from "react";
import { getAllTodosData } from "./api/todos";

export type TodoType = {
  id: number;
  content: string;
  done: boolean;
};

export type TodoItemType = {
  todo: TodoType;
};

export type TodoListType = {
  todoList: TodoType[];
};

export type Props1 = {
  title: string;
  as: string;
};

// TodoTitleコンポーネントを作成
const TodoTitle: React.FC<Props1> = ({ title, as }) => {
  if (as === "h1") return <h1>{title}</h1>;
  if (as === "h2") return <h2>{title}</h2>;
  return <p>{title}</p>;
};

// TodoItemコンポーネントを作成
const TodoItem = (todo: TodoType) => {
  return (
    <li key={todo.id}>
      {todo.content}
      <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
      <button>削除</button>
    </li>
  );
};

// TodoListコンポーネントを作成
const TodoList: React.FC<TodoListType> = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id}></TodoItem>;
      })}
    </ul>
  );
};

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  // データ取得
  useEffect(() => {
    setTodoList(getAllTodosData);
  }, []);

  // TODOが未完了の配列を作成
  const inCompleteList = todoList.filter((todo) => {
    return !todo.done;
  });

  // TODOが完了の配列を作成
  const completeList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1"></TodoTitle>
      <textarea></textarea>
      <button>+ TODOを追加</button>
      <TodoTitle title="未完了のTODOリスト" as="h2"></TodoTitle>
      <TodoList todoList={inCompleteList}></TodoList>
      <TodoTitle title="完了のTODOリスト" as="h2"></TodoTitle>
      <TodoList todoList={completeList}></TodoList>
    </>
  );
}

export default App;
