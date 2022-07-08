import React from 'react'
import TopPagePresenter from './TopPagePresenter'
import { CognitoUserPool } from 'amazon-cognito-identity-js'
import awsConfiguration from '../../awsConfiguration'
import { Todos } from '../Todos'
import SignIn from '../SignIn'
import { useNavigate } from 'react-router-dom'

interface Action {
  onClickSignIn: () => void
  onClickSignUp: () => void
}
export interface Props {
  action: Action
}

export const TopPageContainer: React.VFC = () => {
  const navigate = useNavigate()

  const userPool = new CognitoUserPool({
    UserPoolId: awsConfiguration.userPoolId,
    ClientId: awsConfiguration.clientId,
  })

  const action = {
    onClickSignIn: () => {
      navigate('/signIn')
    },
    onClickSignUp: () => {
      navigate('/signUp')
    },
  }

  const authentication = () => {
    const cognitoUser = userPool.getCurrentUser()

    if (cognitoUser) {
      return <Todos></Todos>
    } else {
      return <TopPagePresenter action={action}></TopPagePresenter>
    }
  }

  return <>{authentication()}</>
}
