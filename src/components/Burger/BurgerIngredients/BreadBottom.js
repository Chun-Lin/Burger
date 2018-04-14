import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBreadBottom = styled.div`
  height: 13%;
  width: 80%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`

export default class BreadBottom extends Component {
  render() {
    return <StyledBreadBottom />
  }
}
