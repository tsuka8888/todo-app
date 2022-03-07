import * as TYPE from './types'

export const SET_LOADING = 'SET_LOADING' as const

// Action Creator
export function setLoadingAction(isLoading: boolean) {
  return {
    type: SET_LOADING,
    payload: isLoading
  }
}


export type LoadingAction =
  | ReturnType<typeof setLoadingAction>
