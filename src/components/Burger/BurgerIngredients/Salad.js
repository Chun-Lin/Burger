import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSalad = styled.div`
  width: 85%;
  height: 7%;
  margin: 2% auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`

export class Salad extends Component {
  render() {
    return <StyledSalad />
  }
}
