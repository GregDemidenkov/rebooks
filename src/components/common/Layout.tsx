import React from 'react'
import styled from 'styled-components'

import {Outlet} from 'react-router-dom'
import {Header} from './Header'

const Container = styled.div`
  max-width: 1600px;
  width: 90%;
  height: 100vh;
  margin: 5% auto;
  padding: 16px;
  background-color: #F8F3ED;
  border-radius: 30px;
`

export const Layout: React.FC = () => {
  return(
    <>
      <Container>
        <Header />
        <Outlet/>
      </Container>
    </>
  )
}