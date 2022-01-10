import axios from 'axios'
import * as ACTIONS from './actions'

const usersUrl = 'https://atk7e5jl02.execute-api.ap-northeast-1.amazonaws.com/prod'

export function getUserList(): (dispatch: any) => any {
  return async (dispatch) => {
    dispatch(ACTIONS.fetchUserListAction())
    await axios
      .get(`${usersUrl}/users`)
      .then((response) => response.data)
      .then((users) => {
        dispatch(ACTIONS.fetchUserListSuccessAction(users))
      })
      .catch(() => {
        dispatch(ACTIONS.fetchUserListErrorAction())
      })
  }
}
export function getUser(id: string): (dispatch: any) => any {
  return async (dispatch) => {
    dispatch(ACTIONS.fetchUserAction())
    await axios
      .get(`${usersUrl}/users/${id}`)
      .then((response) => response.data)
      .then((users) => {
        dispatch(ACTIONS.fetchUserSuccessAction(users))
      })
      .catch(() => {
        dispatch(ACTIONS.fetchUserErrorAction())
      })
  }
}

export function createUser(body: any): any {
  return async (dispatch: any) => {
    console.log(body)
    dispatch(ACTIONS.postUserAction(body))
    await axios
      .post(`${usersUrl}/users`, body)
      .then((res) => {
        console.log('success', res)
        dispatch(ACTIONS.postUserSuccessAction())
      })
      .catch((err) => {
        console.log('error', err)
        dispatch(ACTIONS.postUserErrorAction())
      })
  }
}
