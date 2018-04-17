import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const StyledBurger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`

const Burger = ({ ingredients }) => {
  const ingredientNumbers = Object.values(ingredients)

  let transformedIngredients = Object.keys(ingredients)
    .map((igKey, i) => {
      return [...Array(ingredientNumbers[i])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <StyledBurger>
      <BurgerIngredient type="breadtop" />
      {transformedIngredients}
      <BurgerIngredient type="breadbottom" />
    </StyledBurger>
  )
}

Burger.propTypes = {
  ingredients: PropTypes.object,
}

export default Burger
