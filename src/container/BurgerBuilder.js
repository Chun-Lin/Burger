import React, { Component, Fragment } from 'react'

import Burger from '../components/Burger/Burger'
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls'
import Modal from '../components/UI/Modal/Modal'
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary'
import Backdrop from '../components/UI/Backdrop/Backdrop'

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
    purchasable: true,
    purchasing: false,
  }

  isPurchasable = ingredients => {
    const updatedPurchasable = Object.keys(ingredients)
      .map(key => {
        return ingredients[key]
      })
      .reduce((num, el) => {
        return num + el
      }, 0)

    this.setState({ purchasable: updatedPurchasable > 0 })
  }

  isPurchasing = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    alert('You continue!');
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
    this.isPurchasable(updatedIngredients)
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

    this.isPurchasable(updatedIngredients)
  }

  render() {
    const disabledLessButtons = { ...this.state.ingredients }
    for (const key in disabledLessButtons) {
      disabledLessButtons[key] = disabledLessButtons[key] <= 0
    }

    return (
      <React.Fragment>
        <Modal showModal={this.state.purchasing}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            cancelClicked={this.purchaseCancelHandler}
            continueClicked={this.purchaseContinueHandler}
          />
        </Modal>

        {this.state.purchasing ? (
          <Backdrop clicked={this.purchaseCancelHandler} />
        ) : (
          <Fragment />
        )}

        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          addIngredients={this.addIngredients}
          decreaseIngredients={this.decreaseIngredients}
          price={this.state.totalPrice}
          disabled={disabledLessButtons}
          purchasable={this.state.purchasable}
          purchasing={this.isPurchasing}
        />
      </React.Fragment>
    )
  }
}

export default BurgerBuilder
