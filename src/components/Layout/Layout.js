import React, { Fragment } from 'react'
import styled from 'styled-components'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import PropTypes from 'prop-types'

const StyledMain = styled.main`
  margin-top: 72px;
`

const Layout = ({ children }) => {
  return (
    <Fragment>
      <SideDrawer />
      <Toolbar />
      <StyledMain>{children}</StyledMain>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
