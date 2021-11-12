import { Container, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUser } from "../hooks/useUser";
export const Users = () => {
  const { userList, fetchAllUsers } = useUser();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  console.log(userList);
  return (
    <Container>
      <Typography variant="subtitle1">Userページ</Typography>
    </Container>
  );
};
