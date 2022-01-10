import React from 'react'
import { Button, createStyles, makeStyles } from '@material-ui/core'

const useUploadButtonStyles = makeStyles(() =>
  createStyles({
    input: {
      display: 'none',
    },
  })
)

type UploadButtonProps = {
  name: string
  onChange: any
  children: React.ReactNode
}
export const UploadButton = (props: UploadButtonProps) => {
  const classes = useUploadButtonStyles()
  return (
    <label htmlFor={`upload-button-${props.name}`}>
      <input
        accept="image/*"
        className={classes.input}
        id={`upload-button-${props.name}`}
        name={props.name}
        multiple
        type="file"
        onChange={props.onChange}
      />
      <Button variant="contained" component="span" {...props}>
        {props.children}
      </Button>
    </label>
  )
}
