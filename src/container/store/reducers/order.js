import {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_BURGER_INIT,
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
} from '../actions/actionTypes'
import { handleActions } from 'redux-actions'

const initialState = {
  orders: [],
  loading: false,
}

const reducer = handleActions(
  {
    [PURCHASE_BURGER_INIT]: (state, actions) => ({
      ...state,
      purchased: false,
    }),
    [PURCHASE_BURGER_START]: (state, actions) => ({
      ...state,
      loading: true,
    }),
    [PURCHASE_BURGER_SUCCESS]: (state, { orderID, orderData }) => {
      const newOrder = {
        ...orderData,
        id: orderID,
      }
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: [...state.orders, { ...newOrder }],
      }
    },
    [PURCHASE_BURGER_FAIL]: (state, actions) => ({
      ...state,
      loading: false,
    }),
    [FETCH_ORDERS_START]: state => ({
      ...state,
      loading: true,
    }),
    [FETCH_ORDERS_SUCCESS]: (state, { orders }) => ({
      ...state,
      orders: orders,
      loading: false,
    }),
    [FETCH_ORDERS_FAIL]: (state, actions) => ({
      ...state,
      loading: false,
    }),
  },
  initialState,
)

export default reducer
