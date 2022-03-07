import { LoadingState } from './types'
import * as ACTIONS from './actions'
import { useDispatch } from 'react-redux'

export function setLoading(isLoading: boolean) {
  const dispatch = useDispatch()
  dispatch(ACTIONS.setLoadingAction(isLoading))
}
