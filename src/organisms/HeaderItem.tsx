import React, { CSSProperties } from 'react'
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { signOut } from '../auth/SignOut'


export const HeaderItem = () => {
  const styles: { [name: string]: CSSProperties } = {
    div: {
      textAlign: 'center',
    },
  }

  const navigate = useNavigate()

  const onClickSignOut = () => {
    signOut()
    window.location.reload()
  }

  return (
    <div style={styles.div}>
      <Button color="primary" component={RouterLink} to="/">
        TODO
      </Button>
      <Button color="primary" component={RouterLink} to="/users">
        USERS
      </Button>
      <Button color="primary" onClick={onClickSignOut}>
        SIGN OUT
      </Button>
    </div>
  )
}
