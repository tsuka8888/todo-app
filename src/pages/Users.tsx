import React from 'react'
import { useEffect } from 'react'
import { Container, Typography } from '@material-ui/core'
import { useUser } from '../hooks/useUser'
import { UserList } from '../organisms/UserList'
import { ButtonRouter } from '../molecules/ButtonRouter'

export const Users = () => {
  const { storeUser, fetchUserList } = useUser()
  useEffect(() => {
    fetchUserList()
  }, [fetchUserList])

  return (
    <>
      <Container>
        <div>
          <ButtonRouter path="./create">新規作成</ButtonRouter>
        </div>
        <Typography variant="subtitle1">Userページ</Typography>
        {storeUser.userList && <UserList userList={storeUser.userList} />}
      </Container>
    </>
  )
}
