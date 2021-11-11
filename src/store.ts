import { combineReducers, createStore } from "redux";

import { TodosReducer } from "./modules/todos";

export interface RootState {
  todos: ReturnType<typeof TodosReducer>;
}

const reducers = combineReducers({
  todos: TodosReducer,
});

export const store = createStore(reducers);
