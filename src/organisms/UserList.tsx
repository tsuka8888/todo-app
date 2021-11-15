import { Box, Card, Typography } from "@material-ui/core";
import { UserState } from "../models/users";

type UserListProps = {
  userList: UserState[];
};

export const UserList: React.VFC<UserListProps> = (props) => {
  return (
    <Box p={1}>
      {props.userList.map((user, index) => (
        <Box mb={2} key={user.id}>
          <Card>
            <Box p={1}>
              <Typography variant="subtitle1">{user.id}</Typography>
              <Typography variant="subtitle1">{user.name}</Typography>
              <Typography variant="subtitle1">{user.email}</Typography>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};
