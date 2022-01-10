import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList, getUser, createUser } from '../modules/users/operations'
import { userListSelector } from '../modules/users'

export const useUser = () => {
  const dispatch = useDispatch()
  const storeUser = useSelector(userListSelector)

  const fetchUserList = useCallback(() => {
    dispatch(getUserList())
  }, [dispatch])

  const fetchUser = useCallback(
    (id: string) => {
      dispatch(getUser(id))
    },
    [dispatch]
  )

  const postUser = useCallback(
    (body: any) => {
      dispatch(createUser(body))
    },
    [dispatch]
  )

  return {
    storeUser,
    fetchUserList,
    fetchUser,
    postUser,
  }
}
