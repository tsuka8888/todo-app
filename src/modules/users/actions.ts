import * as TYPES from './types'

export const FETCH_USER_LIST = 'FETCH_USER_LIST' as const
export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS' as const
export const FETCH_USER_LIST_ERROR = 'FETCH_USER_LIST_ERROR' as const
export const FETCH_USER = 'FETCH_USER' as const
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS' as const
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR' as const
export const POST_USER = 'POST_USER' as const
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS' as const
export const POST_USER_ERROR = 'POST_USER_ERROR' as const

export const fetchUserListAction = () => {
  return {
    type: FETCH_USER_LIST,
  }
}
export const fetchUserListSuccessAction = (userList: TYPES.UserState[]) => {
  return {
    type: FETCH_USER_LIST_SUCCESS,
    payload: userList,
  }
}
export const fetchUserListErrorAction = () => {
  return {
    type: FETCH_USER_LIST_ERROR,
  }
}
export const fetchUserAction = () => {
  return {
    type: FETCH_USER,
  }
}
export const fetchUserSuccessAction = (user: TYPES.UserState) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  }
}
export const fetchUserErrorAction = () => {
  return {
    type: FETCH_USER_ERROR,
  }
}
export const postUserAction = (user: TYPES.UserState) => {
  return {
    type: POST_USER,
    payload: user
  }
}
export const postUserSuccessAction = () => {
  return {
    type: POST_USER_SUCCESS,
  }
}
export const postUserErrorAction = () => {
  return {
    type: POST_USER_ERROR,
  }
}

export type UsersAction =
  | ReturnType<typeof fetchUserListAction>
  | ReturnType<typeof fetchUserListSuccessAction>
  | ReturnType<typeof fetchUserListErrorAction>
  | ReturnType<typeof fetchUserAction>
  | ReturnType<typeof fetchUserSuccessAction>
  | ReturnType<typeof fetchUserErrorAction>
  | ReturnType<typeof postUserAction>
  | ReturnType<typeof postUserSuccessAction>
  | ReturnType<typeof postUserErrorAction>

