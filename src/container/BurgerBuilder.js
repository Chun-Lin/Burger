import React, { Component, Fragment } from 'react'

import Burger from '../components/Burger/Burger'
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls'
import Modal from '../components/UI/Modal/Modal'
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary'
import Backdrop from '../components/UI/Backdrop/Backdrop'
import Spinner from '../components/UI/Spinner/Spinner'
import withErrorHandler from '../hoc/withErrorHandler'
import {
  addIngredient,
  decreaseIngredient,
  setIngredient,
  purchaseInit,
} from './store/actions/index'

import { connect } from 'react-redux'
class BurgerBuilder extends Component {
  state = {
    purchasable: true,
    purchasing: false,
    loading: false,
    error: false,
  }

  componentDidMount() {
    this.props.onIngredientInit()
    // axios
    //   .get('/ingredients.json')
    //   .then(response => {
    //     this.setState({ ingredients: response.data })
    //   })
    //   .catch(error => {
    //     this.setState({ error: true })
    //   })
    // axios
    //   .get('/price.json')
    //   .then(response => {
    //     this.setState({ price: response.data })
    //   })
    //   .catch(error => {
    //     this.setState({ error: true })
    //   })
    // axios
    //   .get('/initTotalPrice.json')
    //   .then(response => {
    //     this.setState({ totalPrice: response.data })
    //   })
    //   .catch(error => {
    //     this.setState({ error: true })
    //   })
  }

  isPurchasable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key]
      })
      .reduce((num, el) => {
        return num + el
      }, 0)

    return sum > 0
  }

  isPurchasing = () => {
    this.props.isAuthenticated
      ? this.setState({ purchasing: true })
      : this.props.history.push('/auth')
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    this.props.purchaseInit()
    this.props.history.push({
      pathname: '/checkout',
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
    console.log(this.props.ingredients)
    const disabledLessButtons = { ...this.props.ingredients }
    for (const key in disabledLessButtons) {
      disabledLessButtons[key] = disabledLessButtons[key] <= 0
    }

    let orderSummary = null
    let burger = this.props.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    )
    // console.log(this.props.ingredients)
    if (this.props.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.props.ingredients} />
          <BurgerControls
            addIngredients={this.props.onIngredientAdded}
            decreaseIngredients={this.props.onIngredientDecresed}
            price={this.props.totalPrice}
            disabled={disabledLessButtons}
            purchasable={this.isPurchasable(this.props.ingredients)}
            purchasing={this.isPurchasing}
            isAuth={this.props.isAuthenticated}
          />
        </Fragment>
      )

      orderSummary = this.state.loading ? (
        <Spinner />
      ) : (
        <OrderSummary
          ingredients={this.props.ingredients}
          price={this.props.totalPrice}
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

const mapStateToProps = state => {
  // console.log(state)
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.error,
    isAuthenticated: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingredientName =>
      dispatch(addIngredient(ingredientName)),
    onIngredientDecresed: ingredientName =>
      dispatch(decreaseIngredient(ingredientName)),
    onIngredientInit: () => dispatch(setIngredient()),
    purchaseInit: () => dispatch(purchaseInit()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorHandler(BurgerBuilder))
