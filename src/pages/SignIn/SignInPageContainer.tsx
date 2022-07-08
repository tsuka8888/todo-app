import React from 'react'
import SignInPagePresenter from './SignInPagePresenter'

import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import awsConfiguration from '../../awsConfiguration'
import { useNavigate } from 'react-router-dom'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.userPoolId,
  ClientId: awsConfiguration.clientId,
})

interface Action {
  onChangeEmail: (e: any) => void
  onChangePassword: (e: any) => void
  onClickSignIn: () => void
}
export interface Props {
  action: Action
}

const SignInPageContainer = () => {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const action: Action = {
    onClickSignIn: () => {
      const authenticationDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
      })
      const cognitoUser = new CognitoUser({
        Username: email,
        Pool: userPool,
      })

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          const accessToken = result.getAccessToken().getJwtToken()
          setEmail('')
          setPassword('')
          navigate('/')
          console.log('result: ' + result)
          console.log('AccessToken: ' + accessToken)
        },
        onFailure: (err) => {
          console.error(err)
        },
      })
    },
    onChangeEmail: (e: any) => setEmail(e.target.value),
    onChangePassword: (e: any) => setPassword(e.target.value),
  }

  return <SignInPagePresenter action={action} />
}

export default SignInPageContainer
