import { Container, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUser } from "../hooks/useUser";
import { UserList } from "../organisms/UserList";
export const Users = () => {
    const { userList, fetchAllUsers } = useUser();
    const dispatch = useDispatch();
    useEffect(() => {
        fetchAllUsers();
    }, [fetchAllUsers]);
    return (
        <Container>
            <Typography variant="subtitle1">Userページ</Typography>
            <UserList userList={userList} />
        </Container>
    );
};
