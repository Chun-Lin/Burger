import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBreadTop = styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`

export class BreadTop extends Component {
  render() {
    return <StyledBreadTop />
  }
}
