import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`

const InputElement = styled.input`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background-color: #ccc;
  }
`

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`

const Input = props => {
  let inputElement = null

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <InputElement {...props.elementConfig} value={props.value} />
      )
      break
    case 'textarea':
      inputElement = (
        <InputElement {...props.elementConfig} value={props.value} />
      )
      break
    default:
      inputElement = (
        <InputElement {...props.elementConfig} value={props.value} />
      )
  }

  return (
    <InputWrapper>
      <Label>{props.label}</Label>
      {inputElement}
    </InputWrapper>
  )
}

export default Input
