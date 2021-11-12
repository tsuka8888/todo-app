import React, { CSSProperties } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import Button from "@material-ui/core/Button";

export const ButtonRouter = () => {

  const styles: { [name: string]: CSSProperties } = {
    div: {
      textAlign: "center",
    },
  };

  return (
    <div style={styles.div}>
      <Button color="primary" component={RouterLink} to="/">
        TODO
      </Button>
      <Button color="primary" component={RouterLink} to="/users">
        USERS
      </Button>
    </div>
  );
};
