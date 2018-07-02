import React from 'react'
import styled from 'styled-components'

import NavigationItem from './NavigationItem/NavigationItem'

const StyledNavigationItems = styled.ul`
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: space-between; */} align-items: center;
  padding: 0;
  margin: 0;
  height: 100%;
  list-style: none;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`

const NavigationItems = ({ isAuthenticated }) => {
  return (
    <StyledNavigationItems>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      {isAuthenticated ? (
        <NavigationItem link="/Orders">Orders</NavigationItem>
      ) : null}
      {isAuthenticated ? (
        <NavigationItem link="/logout">Logout</NavigationItem>
      ) : (
        <NavigationItem link="/auth">Authenticate</NavigationItem>
      )}
    </StyledNavigationItems>
  )
}

export default NavigationItems
