import React from 'react'
import styled from 'styled-components'

import BurgerControl from './BurgerControl/BurgerControl'

const StyledBurgerContorls = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const BurgerControls = ({ addIngredients, decreaseIngredients, price }) => {
  return (
    <StyledBurgerContorls>
      <p>
        Current Price: <strong>{price}</strong>
      </p>
      {controls.map(control => (
        <BurgerControl
          key={control.label}
          label={control.label}
          add={() => addIngredients(control.type)}
          decrease={() => decreaseIngredients(control.type)}
        />
      ))}
    </StyledBurgerContorls>
  )
}

export default BurgerControls
