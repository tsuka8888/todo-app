import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { LoadingReducer } from './modules/loading/reducers'
import { TodosReducer } from './modules/todos/reducers'
import { UsersReducer } from './modules/users/reducers'

export interface RootState {
  LoadingReducer: ReturnType<typeof LoadingReducer>
  TodosReducer: ReturnType<typeof TodosReducer>
  UsersReducer: ReturnType<typeof UsersReducer>
}

const reducers = combineReducers({
  LoadingReducer,
  TodosReducer,
  UsersReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))
