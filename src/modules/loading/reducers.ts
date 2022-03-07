import * as ACTIONS from './actions'

export type InitialState = {
  isLoading: boolean
}
const initialState: InitialState = {
  isLoading: false,
}

export const LoadingReducer = (
  state = initialState,
  action: ACTIONS.LoadingAction
) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return {
        isLoading: action.payload,
      }
    default:
      return { ...state }
  }
}
