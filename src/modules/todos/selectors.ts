import { InitialState } from './reducers'
import {TodoState} from './types'

export function todosSelector(rootState: InitialState) {
  return rootState.todoList
}
