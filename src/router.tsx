import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Todos } from './pages/Todo/Todos'
import { User } from './pages/User'
import { Users } from './pages/Users'
import CreateUserPage from './pages/CreateUser/index'
import { Top } from './pages/Top'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/users/create" element={<CreateUserPage />} />
      <Route path="/users/edit/:id" element={<CreateUserPage />} />
    </Routes>
  )
}
