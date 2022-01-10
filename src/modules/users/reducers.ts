import * as ACTIONS from './actions'
import * as TYPES from './types'

export type InitialState = {
  userList: TYPES.UserState[] | undefined
  user: TYPES.UserState | undefined
}
const initialState: InitialState = {
  userList: undefined,
  user: undefined,
}

export function UsersReducer(state = initialState, action: ACTIONS.UsersAction) {
  switch (action.type) {
    case ACTIONS.FETCH_USER_LIST:
      return { ...state, userList: [], user: null }
    case ACTIONS.FETCH_USER_LIST_SUCCESS:
      return { ...state, userList: action.payload, user: null }
    case ACTIONS.FETCH_USER_LIST_ERROR:
      return { ...state, userList: [], user: null }
    case ACTIONS.FETCH_USER:
      return { ...state, userList: null, user: null }
    case ACTIONS.FETCH_USER_SUCCESS:
      return { ...state, userList: null, user: action.payload }
    case ACTIONS.FETCH_USER_ERROR:
      return { ...state, user: null }
    case ACTIONS.POST_USER:
      return { ...state, userList: null, user: action.payload }
    case ACTIONS.POST_USER_SUCCESS:
      return { ...state, userList: null }
    case ACTIONS.POST_USER_ERROR:
      return { ...state, user: null }
    default:
      return { ...state }
  }
}
