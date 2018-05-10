import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledList = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }
`

const StyledNavLink = styled(NavLink)`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  &:hover {
    color: #40a4c8;
  }

  &:active {
    color: #40a4c8;
  }

  @media (min-width: 500px) {
    color: white;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;

    &:hover {
      background-color: #8f5c2c;
      border-bottom: 6px solid #40a4c8;
      color: white;
    }

    &:active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`

const NavigationItem = ({ children, link, exact }) => {
  return (
    <StyledList>
      <StyledNavLink
        to={link}
        exact={exact}
        activeStyle={{
          backgroundColor: '#8f5c2c',
          borderBottom: '6px solid #40a4c8',
          color: 'white',
        }}
      >
        {children}
      </StyledNavLink>
    </StyledList>
  )
}

export default NavigationItem
