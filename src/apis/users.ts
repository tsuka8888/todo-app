import axios from "axios";
import { Dispatch } from "react";
import { userActionCreator } from "../modules/users";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

export function getAllUsers(): (dispatch: any, getState: any) => any {
  return async (dispatch, getState) => {
    await axios
      .get(usersUrl)
      .then((response) => response.data)
      .then((users) => dispatch(userActionCreator.fetchAllUserAction(users)));
  };
}
