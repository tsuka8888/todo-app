import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ButtonRouter } from "../molecules/ButtonRouter";
export const Header = () => {
  const styles: { [name: string]: CSSProperties } = {
    header: {},
    linkDiv: {},
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <ButtonRouter></ButtonRouter>
    </AppBar>
  );
};
