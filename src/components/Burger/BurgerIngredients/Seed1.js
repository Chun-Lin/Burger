import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSeed1 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9c9c9;
  }
`

export class Seed1 extends Component {
  render() {
    return <StyledSeed1 />
  }
}
