import React, { Component } from 'react'

import Burger from '../components/Burger/Burger'
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  }

  addIngredients = type => {
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = this.state.ingredients[type] + 1
    this.setState({ ingredients: updatedIngredients })
  }

  decreaseIngredients = type => {
    if (this.state.ingredients[type] <= 0) return
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = this.state.ingredients[type] - 1
    this.setState({ ingredients: updatedIngredients })
  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          addIngredients={this.addIngredients}
          decreaseIngredients={this.decreaseIngredients}
        />
      </React.Fragment>
    )
  }
}

export default BurgerBuilder
