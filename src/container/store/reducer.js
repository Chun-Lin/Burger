import { ADD_INGREDIENT, DECREASE_INGREDIENT } from './actionTypes'
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

const reducer = handleActions(
  {
    [ADD_INGREDIENT]: (state, { ingredientName }) => ({
      ...state,
      ingredients: {
        ...state.ingredients,
        [ingredientName]: state.ingredients[ingredientName] + 1,
      },
    }),
    [DECREASE_INGREDIENT]: (state, { ingredientName }) => ({
      ...state,
      ingredients: {
        ...state.ingredients,
        [ingredientName]: state.ingredients[ingredientName] - 1,
      },
    }),
  },
  initialState,
)

export default reducer
