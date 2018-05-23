import React from 'react'
import styled from 'styled-components'
import { Field } from 'formik'

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
  // console.log(props.elementConfig)
  // console.log(props.elementType)
  const {
    elementType,
    elementConfig,
    changed,
    label,
    name,
    value,
    touched,
    errors,
    onChange,
  } = props

  // console.log(elementConfig)
  switch (elementType) {
    case 'input':
      inputElement = (
        <InputElement
          {...elementConfig}
          name={name}
          value={value}
          onChange={onChange}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <InputElement
          {...elementConfig}
          name={name}
          value={value}
          onChange={changed}
        />
      )
      break
    case 'select':
      inputElement = (
        <StyledSelect name={name}>
          {elementConfig.options.map(option => {
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
      inputElement = <InputElement {...elementConfig} value={value} />
  }

  return (
    <InputWrapper>
      <Label>{label}</Label>
      {inputElement}
      {touched[name] &&
        errors[name] && <div style={{ color: 'red' }}>{errors[name]}</div>}
    </InputWrapper>
  )
}

export default Input
