import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
