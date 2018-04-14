import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCheese = styled.div`
  width: 90%;
  height: 4.5%;
  margin: 2% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`

export default class Cheese extends Component {
  render() {
    return <StyledCheese />
  }
}
