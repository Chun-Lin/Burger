import React, { Component, Fragment } from 'react'

import Burger from '../components/Burger/Burger'
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls'
import Modal from '../components/UI/Modal/Modal'
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary'
import Backdrop from '../components/UI/Backdrop/Backdrop'
import Spinner from '../components/UI/Spinner/Spinner'
import withErrorHandler from '../hoc/withErrorHandler'

import axios from '../axios-orders'

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    price: null,
    totalPrice: 0,
    purchasable: true,
    purchasing: false,
    loading: false,
    error: false,
  }

  componentDidMount() {
    axios
      .get('/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data })
      })
      .catch(error => {
        this.setState({ error: true })
      })

    axios
      .get('/price.json')
      .then(response => {
        this.setState({ price: response.data })
      })
      .catch(error => {
        this.setState({ error: true })
      })

    axios
      .get('/initTotalPrice.json')
      .then(response => {
        this.setState({ totalPrice: response.data })
      })
      .catch(error => {
        this.setState({ error: true })
      })
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
    // this.setState({ loading: true })

    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'ChunLin Wu',
    //     address: {
    //       street: 'Teststreet 1',
    //       zipCode: '41351',
    //       country: 'Taiwan',
    //     },
    //     email: 'test@test.com',
    //   },
    //   deliveryMethod: 'fastest',
    // }

    // axios
    //   .post('/orders.json', order)
    //   .then(response => {
    //     console.log(response)
    //     this.setState({ purchasing: false, loading: false })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    const queryParams = []
    if (this.state.ingredients) {
      for (let i in this.state.ingredients) {
        queryParams.push(
          `${encodeURIComponent(i)}=${encodeURIComponent(
            this.state.ingredients[i],
          )}`,
        )
      }
    }
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryString}`,
    })
  }

  addTotalPrice = type => {
    return this.state.totalPrice + this.state.price[type]
  }

  decreaseTotalPrice = type => {
    return this.state.totalPrice - this.state.price[type]
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

    let orderSummary = null
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    )

    if (this.state.ingredients && this.state.price) {
      burger = (
        <Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BurgerControls
            addIngredients={this.addIngredients}
            decreaseIngredients={this.decreaseIngredients}
            price={this.state.totalPrice}
            disabled={disabledLessButtons}
            purchasable={this.state.purchasable}
            purchasing={this.isPurchasing}
          />
        </Fragment>
      )

      orderSummary = this.state.loading ? (
        <Spinner />
      ) : (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          cancelClicked={this.purchaseCancelHandler}
          continueClicked={this.purchaseContinueHandler}
        />
      )
    }

    return (
      <React.Fragment>
        <Modal showModal={this.state.purchasing}>{orderSummary}</Modal>

        {this.state.purchasing ? (
          <Backdrop clicked={this.purchaseCancelHandler} />
        ) : (
          <Fragment />
        )}
        {burger}
      </React.Fragment>
    )
  }
}

export default withErrorHandler(BurgerBuilder)
