import React from 'react'

import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import awsConfiguration from '../awsConfiguration'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.userPoolId,
  ClientId: awsConfiguration.clientId,
})

const SignUp: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const changedEmailHandler = (event: any) => setEmail(event.target.value)
  const changedPasswordHandler = (event: any) => setPassword(event.target.value)
  const signUp = () => {
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
    })
  }

  return (
    <div className="SignUp">
      <h1 style={{ textAlign: 'left' }}>SignUp</h1>
      <input type="text" placeholder="email" onChange={changedEmailHandler} />
      <input type="text" placeholder="password" onChange={changedPasswordHandler} />
      <button onClick={signUp}>SignUp</button>
    </div>
  )
}

export default SignUp
