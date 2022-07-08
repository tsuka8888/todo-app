import { Box, Button, Container } from '@material-ui/core'
import React from 'react'
import { Props } from './TopPageContainer'

const TopPagePresenter = (props: Props) => {
  const {
    action: { onClickSignIn, onClickSignUp },
  } = props

  return (
    <>
      <Container
        style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box style={{ height: '80%' }}>
          <h1>SAKURA TODO</h1>
          <Box p={1} display='flex' justifyContent='center' style={{gap: 10}}>
            <Button variant='outlined' onClick={onClickSignIn}>サインイン</Button>
            <Button variant='outlined' onClick={onClickSignUp}>サインアップ</Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default TopPagePresenter
