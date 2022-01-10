import React, { useState } from 'react'
import { Container, Paper, Grid, Box, makeStyles, TextField, Button } from '@material-ui/core'
import { UploadButton } from '../../atoms/UploadButton'
import { useForm } from 'react-hook-form'
import { useUser } from '../../hooks/useUser'
const useStyles = makeStyles(() => ({
  imageGroup: {
    '& > div': {
      '&:nth-of-type(1)': {
        marginBottom: '10px',
        margin: 'auto',
      },
      '&:nth-of-type(2)': {
        textAlign: 'center',
      },
    },
  },
  inputGroup: {},
}))

const ImageUploadSection = () => {
  const classes = useStyles()
  const [postFileData, setPostFileData] = useState({})
  const changeUploadFile = async (event: any) => {
    const { name, files } = event.target
    setPostFileData({
      ...postFileData,
      [name]: files[0],
    })
    event.target.value = ''
  }
  React.useEffect(() => {
    console.log('postFileData', postFileData)
  }, [postFileData])
  return (
    <Box className={classes.imageGroup}>
      <Box style={{ width: '300px', height: '300px', backgroundColor: '#00000060' }}></Box>
      <Box>
        <UploadButton name="image" onChange={changeUploadFile}>
          イメージを選択する
        </UploadButton>
      </Box>
    </Box>
  )
}

type InputSectionProps = {
  forms: {
    control: any
    register: any
  }
}
const InputSection = (props: InputSectionProps) => {
  const {
    forms: { register },
  } = props
  // const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField name="id" label="ユーザーID" inputRef={register} fullWidth></TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField name="lastName" label="姓" inputRef={register} fullWidth></TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField name="firstName" label="名" inputRef={register} fullWidth></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField name="nickName" label="ニックネーム" inputRef={register} fullWidth></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField name="email" label="メールアドレス" inputRef={register} fullWidth></TextField>
      </Grid>
      <Button type="submit">登録</Button>
    </Grid>
  )
}

const CreateUserPagePresenter: React.VFC = () => {
  const { postUser } = useUser()

  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      id: '',
      lastName: '',
      firstName: '',
      nickName: '',
      email: '',
    },
  })
  const forms = {
    control,
    register,
  }

  const onSubmit = (data: any) => {
    postUser(data)
  }

  return (
    <Container>
      <h2>User Create Page</h2>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box p={3}>
            <Grid container>
              <Grid item xs={6}>
                <Box p={3}>
                  <ImageUploadSection />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box p={3}>
                  <InputSection forms={forms} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Paper>
    </Container>
  )
}

export default CreateUserPagePresenter
