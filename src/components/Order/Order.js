import React from 'react'
import styled from 'styled-components'

const StyledOrder = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`

const IngredientSpan = styled.span`
  display: inline-block;
  border: 1px solid #ccc;
  margin: 0 7px;
  padding: 2px 5px;
`

const Order = ({ ingredients, totalPrice, customerName }) => {
  let orderIngredients = []
  for (let ingre in ingredients) {
    orderIngredients.push({ name: ingre, amount: ingredients[ingre] })
  }

  const ingredientOutput = orderIngredients.map(orderIngre => {
    return (
      <IngredientSpan key={orderIngre.name}>
        {' '}
        {orderIngre.name}({orderIngre.amount})
      </IngredientSpan>
    )
  })

  return (
    <StyledOrder>
      <h2>{customerName}</h2>
      <p>Ingredients:{ingredientOutput}</p>
      <p>
        Price:{' '}
        <strong>
          NTD <strong>{totalPrice}</strong>
        </strong>
      </p>
    </StyledOrder>
  )
}

export default Order
