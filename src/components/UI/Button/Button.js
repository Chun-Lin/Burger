import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props =>
    props.btnType === 'success'
      ? '#5C9210'
      : props.btnType === 'danger'
        ? '#944317'
        : 'white'};
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  &:disabled{
    color: #ccc;
    cursor: not-allowed;
  }
`

const Button = ({ btnType, children, onClick, disabled }) => (
  <StyledButton btnType={btnType} onClick={onClick} disabled={disabled}>{children}</StyledButton>
)

export default Button
