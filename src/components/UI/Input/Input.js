import React from 'react'
<<<<<<< HEAD
import styled from 'styled-components'
import { Field } from 'formik'
=======
import classes from './Input.css'
>>>>>>> redux-saga-version

const Input = props => {
  let inputElement = null
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
      inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
<<<<<<< HEAD
        <InputElement {...elementConfig} name={name} value={value} />
=======
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
>>>>>>> redux-saga-version
      )
      break
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      )
      break
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      )
      break
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      )
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default Input
