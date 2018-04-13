import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBacon = styled.div`
  width: 80%;
    height: 3%;
    background: linear-gradient(#bf3813, #c45e38);
    margin: 2% auto;
`

export class Bacon extends Component {
  render() {
    return <StyledBacon />
  }
}
