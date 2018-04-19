import React, { Fragment } from 'react'
import styled from 'styled-components'

const OrderSummary = ({ ingredients, price }) => {
  const CapSpan = styled.span`
    text-transform: capitalize;
  `

  const ingredientSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <CapSpan>{igKey}</CapSpan>: {ingredients[igKey]}
      </li>
    )
  })

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: {price}</p>
      <p>Continue to Checkout?</p>
    </Fragment>
  )
}

export default OrderSummary
