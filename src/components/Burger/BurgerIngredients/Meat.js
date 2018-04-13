import React, { Component } from 'react'
import styled from 'styled-components'

const StyledMeat = styled.div`
  width: 80%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 2% auto;
  border-radius: 15px;
`

export class Meat extends Component {
  render() {
    return <StyledMeat />
  }
}
