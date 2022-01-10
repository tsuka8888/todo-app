import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { TodosReducer } from "./modules/todos/reducers";
import { UsersReducer } from "./modules/users/reducers";

export interface RootState {
  todos: ReturnType<typeof TodosReducer>;
}

const reducers = combineReducers({
  TodosReducer,
  UsersReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
