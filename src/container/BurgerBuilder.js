import React, { Component } from 'react'

import Burger from '../components/Burger/Burger'
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls'
import INGREDIENTS_PRICE from '../constants/ingredientsPrice'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
    totalPrice: 65,
  }

  addTotalPrice = type => {
    return this.state.totalPrice + INGREDIENTS_PRICE[type]
  }

  decreaseTotalPrice = type => {
    return this.state.totalPrice - INGREDIENTS_PRICE[type]
  }

  addIngredients = type => {
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = this.state.ingredients[type] + 1

    const updatedTotalPrice = this.addTotalPrice(type)

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    })
  }

  decreaseIngredients = type => {
    if (this.state.ingredients[type] <= 0) return
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = this.state.ingredients[type] - 1

    const updatedTotalPrice = this.decreaseTotalPrice(type)

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    })
  }

  render() {
    const disabledLessButtons = { ...this.state.ingredients }
    for (const key in disabledLessButtons) {
      disabledLessButtons[key] = disabledLessButtons[key] <= 0
    }

    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          addIngredients={this.addIngredients}
          decreaseIngredients={this.decreaseIngredients}
          price={this.state.totalPrice}
          disabled={disabledLessButtons}
        />
      </React.Fragment>
    )
  }
}

export default BurgerBuilder
