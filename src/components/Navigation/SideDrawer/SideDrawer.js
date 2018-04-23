import React, { Fragment } from 'react'
import styled from 'styled-components'

import Logo from '../../Logo/Logo'
import Backdrop from '../../UI/Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems'

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px) {
    display: none;
  }
`

const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 11%;
  margin-bottom: 32px;
`

const SideDrawer = () => {
  return (
    <Fragment>
      {/* <Backdrop /> */}
      <StyledSideDrawer>
        <WrapperLogo>
          <Logo />
        </WrapperLogo>
        <nav>
          <NavigationItems />
        </nav>
      </StyledSideDrawer>
    </Fragment>
  )
}

export default SideDrawer
