import {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_BURGER_INIT,
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  PURCHASE_BURGER,
  FETCH_ORDERS,
} from './actionTypes'
import axios from '../../../axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    orderID: id,
    orderData: orderData,
  }
}

export const purchaseBurgerFail = error => {
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
  return {
    type: PURCHASE_BURGER,
    orderData: orderData,
    token: token,
  }
}

export const purchaseInit = () => {
  return {
    type: PURCHASE_BURGER_INIT,
    purchased: false,
  }
}

export const fetchOrderFail = error => {
  return {
    type: FETCH_ORDERS_FAIL,
    error: error,
  }
}

export const fetchOrderSuccess = orders => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders: orders,
  }
}

export const fetchOrderStart = () => {
  return {
    type: FETCH_ORDERS_START,
  }
}

export const fetchOrder = (token, userId) => {
  return {
    type: FETCH_ORDERS,
    token: token,
    userId: userId,
  }
}
