import { ADD_INGREDIENT, DECREASE_INGREDIENT } from './actionTypes'

export const addIngredient = name => ({
  type: ADD_INGREDIENT,
  ingredientName: name,
})

export const decreaseIngredient = name => ({
  type: DECREASE_INGREDIENT,
  ingredientName: name,
})
