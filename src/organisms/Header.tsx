import { AppBar } from "@material-ui/core";
import { ButtonRouter } from "../molecules/ButtonRouter";
export const Header = () => {
    return (
        <AppBar position="static" color="default" elevation={0}>
            <ButtonRouter></ButtonRouter>
        </AppBar>
    );
};
