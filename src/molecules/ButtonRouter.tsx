import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

type ButtonRouterProps = {
  path: string
  children: React.ReactNode
}
export const ButtonRouter = ({ path, children }: ButtonRouterProps) => {
  return (
    <Button color="primary" component={RouterLink} to={path}>
      {children}
    </Button>
  )
}
