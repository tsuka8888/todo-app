import React from 'react'
import { Box, Button, Container, TextField } from '@material-ui/core'
import { Props } from './SignInPageContainer'

const SignInPagePresenter = (props: Props) => {
  const {
    action: { onChangeEmail, onChangePassword, onClickSignIn },
  } = props

  return (
    <Container style={{ maxWidth: 500, height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Box style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Box p={1}>
          <TextField
            variant="outlined"
            placeholder="メールアドレス"
            type="email"
            autoComplete="true"
            fullWidth
            onChange={onChangeEmail}
          ></TextField>
        </Box>
        <Box p={1}>
          <TextField
            variant="outlined"
            placeholder="パスワード"
            type="password"
            fullWidth
            onChange={onChangePassword}
          ></TextField>
        </Box>
        <Box p={1} display="flex" justifyContent="center">
          <Button variant="outlined" color="primary" onClick={onClickSignIn}>
            サインイン
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default SignInPagePresenter
