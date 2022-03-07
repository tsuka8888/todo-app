import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(()=>({
  image__container: {
    backgroundColor: '#aaaaaa',
    height: '100vh',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  text: {
    position: 'absolute',
    top: 200,
    left: 250,
    fontFamily: 'TsukuARdGothic-Regular',
    fontSize: 20,
  },
}))

export const TopPagePresenter: React.VFC = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const onClickLogIn = () => {
    navigate('/todos')
  }

  return (
    <>
      <div className="top">
        <div className="image">
          <div className={classes.image__container}>
            <img src='sakura.jpg' />
          </div>
          <div className={classes.text}>
            <h1>SAKURA TODO</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Button onClick={onClickLogIn}>ログイン</Button>
              <Button>新規登録</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
