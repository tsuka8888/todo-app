import React from 'react'
import { Box, Card, Typography } from '@material-ui/core'
import { UserState } from '../modules/users/types'
import { Link } from 'react-router-dom'

type UserListProps = {
  userList: UserState[]
}

export const UserList = (props: UserListProps) => {
  const { userList } = props
  return (
    <Box p={1}>
      {userList.map((user) => (
        <Box mb={2} key={user.id}>
          <Card>
            <Box p={1}>
              <Typography variant="subtitle1">
                <Link to={`./${user.id}`}>{user.id}</Link>
              </Typography>
              <Typography variant="subtitle1">{user.firstName}</Typography>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  )
}
