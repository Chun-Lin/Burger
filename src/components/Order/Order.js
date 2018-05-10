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

const Order = () => {
  return (
    <StyledOrder>
      <p>Ingredients:Salad</p>
      <p>
        Price: <strong>USD </strong>
      </p>
    </StyledOrder>
  )
}

export default Order
