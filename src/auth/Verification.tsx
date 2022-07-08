import React from 'react'

import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js'
import awsConfiguration from '../awsConfiguration'

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.userPoolId,
  ClientId: awsConfiguration.clientId,
})

const Verification: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')
  const [verificationCode, setVerificationCode] = React.useState<string>('')
  const changedEmailHandler = (event: any) => setEmail(event.target.value)
  const changedVerificationCodeHandler = (event: any) => setVerificationCode(event.target.value)

  const verifyCode = () => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    })
    cognitoUser.confirmRegistration(verificationCode, true, (err: any) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('verification succeeded')
      setEmail('')
      setVerificationCode('')
    })
  }
  return (
    <div className="Verification">
      <h1>Authenticate</h1>
      <input
        type="text"
        placeholder="verification code"
        onChange={changedVerificationCodeHandler}
      />
      <input type="text" placeholder="email" onChange={changedEmailHandler} />
      <button onClick={verifyCode}>Authenticate</button>
    </div>
  )
}

export default Verification
