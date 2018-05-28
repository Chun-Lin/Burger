import { ADD_INGREDIENT, DECREASE_INGREDIENT } from '../actions/actionTypes'
import { handleActions } from 'redux-actions'

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 0,
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
    }),
    [DECREASE_INGREDIENT]: (state, { ingredientName }) => ({
      ...state,
      ingredients: {
        ...state.ingredients,
        [ingredientName]: state.ingredients[ingredientName] - 1,
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICES[ingredientName],
    }),
  },
  initialState,
)

export default reducer
