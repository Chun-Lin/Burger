import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
  constructor(props) {
    super(props)
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    let totalPrice = 0
    for (let param of query) {
      if (param[0] === 'totalPrice') {
        totalPrice = param[1]
      } else {
        // ['salad', '1']
        ingredients[param[0]] = +param[1]
      }
    }

    this.state = {
      ingredients: ingredients,
      totalPrice: totalPrice,
    }
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack()
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.url + '/contact-data'}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    )
  }
}

export default Checkout
