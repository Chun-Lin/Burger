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

const NavigationItems = () => {
  return (
    <StyledNavigationItems>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/Orders">Orders</NavigationItem>
    </StyledNavigationItems>
  )
}

export default NavigationItems
