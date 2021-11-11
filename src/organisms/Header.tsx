import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const styles: { [name: string]: CSSProperties } = {
        header: {},
        linkDiv: {},
    };

    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar>
                <nav>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            p: 1,
                            m: 1,
                            bgcolor: "background.paper",
                        }}
                    >
                        <Box>Item 1</Box>
                        <Box>Item 2</Box>
                        <Box>Item 3</Box>
                    </Box>
                </nav>
            </Toolbar>
        </AppBar>
    );
};
