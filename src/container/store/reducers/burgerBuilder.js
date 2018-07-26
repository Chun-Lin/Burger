import {
  ADD_INGREDIENT,
  DECREASE_INGREDIENT,
  SET_INGREDIENT,
  FETCH_INGREDIENT_FAILED,
} from '../actions/actionTypes'
import { handleActions } from 'redux-actions'

const initialState = {
  ingredients: null,
  totalPrice: 75,
  error: false,
  building: false
}

const INGREDIENT_PRICES = {
  salad: 15,
  cheese: 10,
  meat: 30,
  bacon: 20,
}

const reducer = handleActions(
  {
    [ADD_INGREDIENT]: (state, { ingredientName }) => ({
      ...state,
      ingredients: {
        ...state.ingredients,
        [ingredientName]: state.ingredients[ingredientName] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[ingredientName],
      building: true
    }),
    [DECREASE_INGREDIENT]: (state, { ingredientName }) => ({
      ...state,
      ingredients: {
        ...state.ingredients,
        [ingredientName]: state.ingredients[ingredientName] - 1,
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICES[ingredientName],
      building: true
    }),
    [SET_INGREDIENT]: (state, { ingredients }) => ({
      ...state,
      ingredients: {
        ...ingredients,
      },
      totalPrice: 75,
      error: false,
      building: false
    }),
    [FETCH_INGREDIENT_FAILED]: state => ({
      ...state,
      error: true,
    }),
  },
  initialState,
)

export default reducer
