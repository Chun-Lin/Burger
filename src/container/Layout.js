import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer'
import Backdrop from '../components/UI/Backdrop/Backdrop'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
        <SideDrawer isAuth={this.props.isAuthenticated} open={this.state.isSideDrawerOpen} />
        <Toolbar isAuth={this.props.isAuthenticated} drawerToggleClicked={this.drawerToggleHandler} />
        <StyledMain>{children}</StyledMain>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null
})



Layout.propTypes = {
  children: PropTypes.node,
}

export default connect(mapStateToProps)(Layout)
