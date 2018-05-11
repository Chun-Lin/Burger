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

const StyledSelect = styled.select`
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
        <InputElement
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <InputElement
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      )
      break
    case 'select':
      inputElement = (
        <StyledSelect value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            )
          })}
        </StyledSelect>
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
