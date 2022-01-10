import { InitialState } from './reducers'

export function userListSelector(rootState: { users: InitialState }) {
  return rootState.users
}
