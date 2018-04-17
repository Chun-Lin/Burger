import React, { Component } from 'react'

import Burger from '../components/Burger/Burger'
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 1,
      cheese: 3,
      meat: 2,
    },
  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls />
      </React.Fragment>
    )
  }
}

export default BurgerBuilder
