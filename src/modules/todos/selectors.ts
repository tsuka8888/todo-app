import { InitialState } from './reducers'

export function todosSelector(rootState: { todos: InitialState }) {
  return rootState.todos
}
