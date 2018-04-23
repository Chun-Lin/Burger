import React from 'react'
import styled from 'styled-components'

const StyledDrawerToggle = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  @media (min-width: 500px) {
    display: none;
  }
`

const HorizonLine = styled.div`
  width: 90%;
  height: 3px;
  background-color: white;
`

const noop = () => {}

const DrawerToggle = ({ onClick = noop }) => {
  return (
    <StyledDrawerToggle onClick={onClick}>
      <HorizonLine />
      <HorizonLine />
      <HorizonLine />
    </StyledDrawerToggle>
  )
}

export default DrawerToggle
