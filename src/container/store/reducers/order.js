import {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
} from '../actions/actionTypes'
import { handleActions } from 'redux-actions'

const initialState = {
  orders: [],
  loading: false,
}

const reducer = handleActions(
  {
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
        orders: [...state.orders, { ...newOrder }],
      }
    },
    [PURCHASE_BURGER_FAIL]: (state, actions) => ({
      ...state,
      loading: false,
    }),
  },
  initialState,
)

export default reducer
