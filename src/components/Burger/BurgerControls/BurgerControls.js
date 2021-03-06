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

const OrderButton = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;

  &:hover {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  &:active {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  &:disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  &:not(:disabled) {
    animation: enable 0.3s linear;

    @keyframes enable {
      0% {
        transform: scale(1);
      }
      60% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const BurgerControls = ({
  addIngredients,
  decreaseIngredients,
  price,
  disabled,
  purchasable,
  purchasing,
  isAuth
}) => {
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
          disabled={disabled[control.type]}
        />
      ))}
      <OrderButton disabled={!purchasable} onClick={purchasing}>
        {isAuth ? 'ORDER NOW!' : 'SIGN UP TO ORDER'}
      </OrderButton>
    </StyledBurgerContorls>
  )
}

export default BurgerControls
