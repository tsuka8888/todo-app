/* eslint-disable react/prop-types */
import React, { ReactChild, ReactElement } from 'react'
import { Header } from '../organisms/Header'

type DefaultPagesProps = {
  children: React.ReactNode
}

export const DefaultPages: React.VFC<DefaultPagesProps> = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}
