import { UserState } from "../models/users";

// ActionType
const FETCH_ALL_USERS = "FETCH_ALL_USERS" as const;

// Actions
const fetchAllUserAction = (userList: UserState[]) => {
  return {
    type: FETCH_ALL_USERS,
    payload: { userList },
  };
};

type usersAction = ReturnType<typeof fetchAllUserAction>;

// ActionCreator
export const userActionCreator = {
  fetchAllUserAction,
};

// Selector
export function usersSelector(rootState: {
  UsersReducer: { userList: UserState[] };
}) {
  return rootState.UsersReducer.userList;
}

// State
const initialState: { userList: UserState[] } = {
  userList: [],
};

// Reducer
export function UsersReducer(
  state = initialState,
  action: usersAction
): { userList: UserState[] } {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return { ...state, userList: action.payload.userList };
    default:
      return { ...state };
  }
}
