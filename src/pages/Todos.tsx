// import {React} from 'react';
import { Container, Box } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTodo } from "../hooks/useTodo";
import { TodoInput } from "../organisms/TodoInput";
import { TodoList } from "../organisms/TodoList";

export const Todos: React.VFC = () => {
    // hooks
    const { todoList, inCompleteList, completeList, fetchTodos } = useTodo();
    const dispatch = useDispatch();
    useEffect(() => {
        // DBからデータを取得し、storeに格納
        dispatch(() => fetchTodos());
    }, [dispatch, fetchTodos]);

    return (
        <>
            <Container>
                <Box py={4}>
                    <TodoInput></TodoInput>
                    <TodoList todoList={inCompleteList} isIncompleteList={true}></TodoList>
                    <TodoList todoList={completeList}></TodoList>
                </Box>
            </Container>
        </>
    );
};
