import { InitialState } from './reducers'

export function loadingSelector(rootState: { isLoading: InitialState }) {
  return rootState.isLoading
}
