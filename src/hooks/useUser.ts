import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../apis/users";
import { usersSelector } from "../modules/users";

export const useUser = () => {
    const dispatch = useDispatch();
    const userList = useSelector(usersSelector);

    const fetchAllUsers = useCallback(() => {
        dispatch(getAllUsers());
    }, [dispatch, getAllUsers]);

    return {
        userList,
        fetchAllUsers,
    };
};
