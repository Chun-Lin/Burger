import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer'
import Backdrop from '../components/UI/Backdrop/Backdrop'
import PropTypes from 'prop-types'

const StyledMain = styled.main`
  margin-top: 72px;
`

class Layout extends Component {
  state = {
    isSideDrawerOpen: false,
  }

  drawerToggleHandler = () => {
    this.setState(prevState => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen }
    })
  }

  backDropHandler = () => {
    this.setState({ isSideDrawerOpen: false })
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        {this.state.isSideDrawerOpen ? (
          <Backdrop clicked={this.backDropHandler} />
        ) : (
          <Fragment />
        )}
        <SideDrawer open={this.state.isSideDrawerOpen} />
        <Toolbar drawerToggleClicked={this.drawerToggleHandler} />
        <StyledMain>{children}</StyledMain>
      </Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
