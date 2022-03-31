import React from 'react'
import { AppBar, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  aaa: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'arial black',
    fontSize: 20,
    color: '#666666',
  },
})

export const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="default" elevation={0}>
      <div className={classes.aaa}>
        <a>SAKURA TODO</a>
      </div>
    </AppBar>
  )
}
