import React from 'react'
import styled from 'styled-components'

import Logo from '../../Logo/Logo'

import NavigationItems from '../NavigationItems/NavigationItems'

const StyledToolbar = styled.header`
  height: 56px;
  width: 100%;
  background-color: #703b09;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  top: 0;
  left: 0;
  z-index: 90;
`

const WrapperLogo = styled.div`
  height: 80%;
`

const WrapperNav = styled.nav`
  height: 100%;
`

const Toolbar = () => {
  return (
    <StyledToolbar>
      <WrapperLogo>
        <Logo />
      </WrapperLogo>
      <WrapperNav>
        <NavigationItems />
      </WrapperNav>
    </StyledToolbar>
  )
}
export default Toolbar
