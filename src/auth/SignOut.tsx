import React from 'react'

import { CognitoUserPool } from 'amazon-cognito-identity-js'
import awsConfiguration from '../awsConfiguration'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.userPoolId,
  ClientId: awsConfiguration.clientId,
})

export const signOut = () => {
  const cognitoUser = userPool.getCurrentUser()
  if (cognitoUser) {
    cognitoUser.signOut()
    localStorage.clear()
    console.log('signed out')
  } else {
    localStorage.clear()
    console.log('no user signing in')
  }
}