import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { TodosReducer } from "./modules/todos";

export interface RootState {
  todos: ReturnType<typeof TodosReducer>;
}

const reducers = combineReducers({
  todos: TodosReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
