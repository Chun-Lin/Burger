import axios from '../../../axios-orders'
import { put } from 'redux-saga/effects'

import {
  purchaseBurgerStart,
  purchaseBurgerSuccess,
  purchaseBurgerFail,
  fetchOrderStart,
  fetchOrderSuccess,
  fetchOrderFail,
} from '../actions'

export function* purchaseBurgerSaga(action) {
  yield put(purchaseBurgerStart())
  console.log(action)
  try {
    const response = yield axios.post(
      '/orders.json?auth=' + action.token,
      action.orderData,
    )
    yield put(purchaseBurgerSuccess(response.data.name, action.orderData))
  } catch (error) {
    yield put(purchaseBurgerFail(error))
  }
}

export function* fetchOrdersSaga(action) {
  yield put(fetchOrderStart())
  const queryParams =
    '?auth=' +
    action.token +
    '&orderBy="userId"&equalTo="' +
    action.userId +
    '"'

  console.log(action.token)
  console.log(action.userId)

  try {
    const response = yield axios.get('/orders.json' + queryParams)
    let fetchOrders = []
    for (let key in response.data) {
      fetchOrders.push({ ...response.data[key], id: key })
    }
    yield put(fetchOrderSuccess(fetchOrders))
  } catch (err) {
    yield put(fetchOrderFail(err))
  }
}
