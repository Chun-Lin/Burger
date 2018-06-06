import {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_BURGER_INIT,
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
} from './actionTypes'
import axios from '../../../axios-orders'

const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    orderID: id,
    orderData: orderData,
  }
}

const purchaseBurgerFail = error => {
  return {
    type: PURCHASE_BURGER_FAIL,
    error: error,
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: PURCHASE_BURGER_START,
  }
}

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart())
    axios
      .post('/orders.json?auth=' + token, orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData))
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error))
      })
  }
}

export const purchaseInit = () => {
  return {
    type: PURCHASE_BURGER_INIT,
    purchased: false,
  }
}

const fetchOrderFail = error => {
  return {
    type: FETCH_ORDERS_FAIL,
    error: error,
  }
}

const fetchOrderSuccess = orders => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders: orders,
  }
}

const fetchOrderStart = () => {
  return {
    type: FETCH_ORDERS_START,
  }
}

export const fetchOrder = (token) => {
  return dispatch => {
    dispatch(fetchOrderStart())
    axios
      .get('/orders.json?auth=' + token)
      .then(res => {
        let fetchOrders = []
        for (let key in res.data) {
          fetchOrders.push({ ...res.data[key], id: key })
        }
        dispatch(fetchOrderSuccess(fetchOrders))
      })
      .catch(err => {
        dispatch(fetchOrderFail(err))
      })
  }
}
