import React from 'react'
import styled from 'styled-components'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const StyledCheckoutSummary = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;

  @media (min-width: 600px) {
    width: 80%;
  }
`

const CheckoutSummary = ({ ingredients }) => {
  return (
    <StyledCheckoutSummary>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="Danger">CANCEL</Button>
      <Button btnType="Success">CONTINUE</Button>
    </StyledCheckoutSummary>
  )
}

export default CheckoutSummary
