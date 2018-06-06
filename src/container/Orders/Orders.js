import React, { Component } from 'react'

import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler'
import { connect } from 'react-redux'
import { fetchOrder } from '../store/actions'

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }

  componentDidMount() {
    this.props.fetchOrder(this.props.token)
  }

  render() {
    let orders = <Spinner />
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          customerName={order.orderData.name}
          ingredients={order.ingredients}
          totalPrice={order.price}
        />
      ))
    }
    return <div>{orders}</div>
  }
}

const mapStateToProps = state => ({
  orders: state.order.orders,
  loading: state.order.loading,
  token: state.auth.token
})

const mapDispatchToProps = {
  fetchOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(Orders),
)
