import React, { Component } from 'react'
import styled from 'styled-components'
import {BreadBottom, BreadTop} from './BurgerIngredients/index'
// import BreadTop from './BurgerIngredients/BreadTop'

const StyledBurger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`

class Burger extends Component {
  render() {
    return (
      <StyledBurger>
        <BreadTop />
        <BreadBottom />
      </StyledBurger>
    )
  }
}

export default Burger