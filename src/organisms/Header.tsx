import React from 'react'
import { AppBar } from '@material-ui/core'
import { HeaderItem } from './HeaderItem'
export const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <HeaderItem></HeaderItem>
    </AppBar>
  )
}
