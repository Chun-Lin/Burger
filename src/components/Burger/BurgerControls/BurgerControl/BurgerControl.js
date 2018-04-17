import React from 'react'
import styled from 'styled-components'

const BuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`

const StyledButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;

    &:hover {
      background-color: #ac9980;
      color: #ccc;
      cursor: not-allowed;
    }
  }
`

const StyledLabel = styled.label`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`

const LessButton = StyledButton.extend`
  background-color: #d39952;
  color: white;

  &:hover {
    background-color: #daa972;
    color: white;
  }

  &:active {
    background-color: #daa972;
    color: white;
  }
`

const MoreButton = StyledButton.extend`
  background-color: #8f5e1e;
  color: white;

  &:hover {
    background-color: #99703f;
    color: white;
  }

  &:active {
    background-color: #99703f;
    color: white;
  }
`

const BurgerControl = ({label}) => {
  return (
    <BuildControl>
      <StyledLabel>{label}</StyledLabel>
        <LessButton>Less</LessButton>
        <MoreButton>More</MoreButton>
    </BuildControl>
  )
}

export default BurgerControl
