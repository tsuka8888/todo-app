import React from 'react'
import SignInPagePresenter from './SignUpPagePresenter'

import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import awsConfiguration from '../../awsConfiguration'
import { useNavigate } from 'react-router-dom'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.userPoolId,
  ClientId: awsConfiguration.clientId,
})

interface Action {
  onChangeEmail: (e: any) => void
  onChangePassword: (e: any) => void
  onClickSignUp: () => void
}
export interface Props {
  action: Action
}

const SignUpPageContainer = () => {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const action: Action = {
    onClickSignUp: () => {
      const attributeList = [
        new CognitoUserAttribute({
          Name: 'email',
          Value: email,
        }),
      ]
      userPool.signUp(email, password, attributeList, [], (err, result) => {
        if (err) {
          console.error(err)
          return
        }
        setEmail('')
        setPassword('')
        navigate('/')
      })
    },
    onChangeEmail: (e: any) => setEmail(e.target.value),
    onChangePassword: (e: any) => setPassword(e.target.value),
  }

  return <SignInPagePresenter action={action} />
}

export default SignUpPageContainer
