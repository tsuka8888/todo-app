// import {React} from 'react';
import { useEffect } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoState } from "../models/todos";
import { TodoInput } from "../organisms/TodoInput";
import { TodoList } from "../organisms/TodoList";

export const Todos: React.VFC = () => {
    const { todoList, fetchTodos } = useTodo();

    useEffect(() => {
        // DBからデータを取得し、storeに格納
        fetchTodos();
    }, [fetchTodos]);

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
