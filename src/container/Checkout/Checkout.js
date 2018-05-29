import React, { Component, Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
  // constructor(props) {
  //   super(props)
  //   const query = new URLSearchParams(this.props.location.search)
  //   const ingredients = {}
  //   let totalPrice = 0
  //   for (let param of query) {
  //     if (param[0] === 'totalPrice') {
  //       totalPrice = param[1]
  //     } else {
  //       // ['salad', '1']
  //       ingredients[param[0]] = +param[1]
  //     }
  //   }

  //   this.state = {
  //     ingredients: ingredients,
  //     totalPrice: totalPrice,
  //   }
  // }

  checkoutCancelledHandler = () => {
    this.props.history.goBack()
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render() {
    const redirectHomePage = <Redirect to="/" />
    const summary = (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.url + '/contact-data'}
          component={ContactData}
        />
      </div>
    )
    return (
      <Fragment>
        this.props.ingredients ? {summary} : {redirectHomePage}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
})

export default connect(mapStateToProps)(Checkout)
