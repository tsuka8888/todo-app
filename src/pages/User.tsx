import React from 'react'
import { Container, Paper, Typography, Box } from '@material-ui/core'
import { useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import { useParams } from 'react-router-dom'
import { UserState } from '../modules/users/types'

export const User = () => {
  const { storeUser, fetchUser } = useUser()
  const { id } = useParams()
  
  useEffect(() => {
    if (id) fetchUser(id)
  }, [fetchUser, id])
  
  return <>{storeUser.user && <UserPageCreator user={storeUser.user} />}</>
}

type UserPageCreatorProps = {
  user: UserState
}
const UserPageCreator = (props: UserPageCreatorProps) => {
  const { user } = props
  return (
    <Container>
      <Typography variant="body1">詳細ページ</Typography>
      <Paper>
        <Box p={2}>
          <Typography variant="body1">{user.id}</Typography>
          <Typography variant="body1">{user.firstName}</Typography>
        </Box>
      </Paper>
    </Container>
  )
}
