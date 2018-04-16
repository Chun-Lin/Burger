import React from 'react'
import PropTypes from 'prop-types'
import Bacon from './Bacon'
import BreadBottom from './BreadBottom'
import BreadTop from './BreadTop'
import Cheese from './Cheese'
import Meat from './Meat'
import Salad from './Salad'
import Seed1 from './Seed1'
import Seed2 from './Seed2'

const BurgerIngredient = ({ type }) => {
  return type === 'bacon' ? (
    <Bacon />
  ) : type === 'breadbottom' ? (
    <BreadBottom />
  ) : type === 'breadtop' ? (
    <BreadTop />
  ) : type === 'cheese' ? (
    <Cheese />
  ) : type === 'meat' ? (
    <Meat />
  ) : type === 'salad' ? (
    <Salad />
  ) : type === 'seed1' ? (
    <Seed1 />
  ) : type === 'seed2' ? (
    <Seed2 />
  ) : null
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurgerIngredient