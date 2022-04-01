import React from 'react'
import { Box, IconButton, TextField } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  textField: {
    width: '90%',
  },
  iconButton: {
    width: '10%',
  },
})

export const InputButton = () => {
  const classes = useStyles()
  return (
    <Box p={4}>
      <TextField className={classes.textField} placeholder="TODOを追加する" />
      <IconButton className={classes.iconButton}>
        <AddCircleOutlineIcon />
      </IconButton>
    </Box>
  )
}
