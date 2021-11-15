import { Container, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { UserList } from "../organisms/UserList";

export const Users = () => {
  const { userList, fetchAllUsers } = useUser();
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
