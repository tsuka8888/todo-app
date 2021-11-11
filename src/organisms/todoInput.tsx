import { Button, Container, Paper, TextareaAutosize } from "@material-ui/core";
import { TodoTitle } from "../molecules/todoTitle";
export const TodoInput: React.VFC = () => {
  return (
    <>
      <Paper>
        <Container>
          <TodoTitle title="TODO進捗管理" as="h1"></TodoTitle>
          <TextareaAutosize></TextareaAutosize>
          <Button color="primary" variant="contained">
            + TODOを追加
          </Button>
        </Container>
      </Paper>
    </>
  );
};
