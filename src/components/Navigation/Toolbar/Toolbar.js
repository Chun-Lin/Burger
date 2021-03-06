import React from 'react'
import styled from 'styled-components'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

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

  @media (max-width: 499px) {
    display: none;
  }
`

const Toolbar = ({ drawerToggleClicked, isAuth }) => {
  return (
    <StyledToolbar>
      <DrawerToggle onClick={drawerToggleClicked} />
      <WrapperLogo>
        <Logo />
      </WrapperLogo>
      <WrapperNav>
        <NavigationItems isAuthenticated={isAuth} />
      </WrapperNav>
    </StyledToolbar>
  )
}
export default Toolbar
