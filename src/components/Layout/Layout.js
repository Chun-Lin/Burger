import React, { Fragment } from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  margin-top: 16px;
`

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <StyledMain>{children}</StyledMain>
    </Fragment>
  )
}

export default Layout
