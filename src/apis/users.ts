import axios from "axios";
import { userActionCreator } from "../modules/users";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

export function getAllUsers(): (dispatch: any) => any {
    return async (dispatch) => {
        await axios
            .get(usersUrl)
            .then((response) => response.data)
            .then((users) => {
                dispatch(userActionCreator.fetchAllUserAction(users));
            });
    };
}
