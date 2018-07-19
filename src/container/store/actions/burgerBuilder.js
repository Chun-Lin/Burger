import {
  ADD_INGREDIENT,
  DECREASE_INGREDIENT,
  SET_INGREDIENT,
  FETCH_INGREDIENT_FAILED,
  INIT_INGREDIENT,
} from './actionTypes'
import axios from '../../../axios-orders'

export const addIngredient = name => ({
  type: ADD_INGREDIENT,
  ingredientName: name,
})

export const decreaseIngredient = name => ({
  type: DECREASE_INGREDIENT,
  ingredientName: name,
})

export const fetchIngredient = ingredients => ({
  type: SET_INGREDIENT,
  ingredients: ingredients,
})

export const fetchIngredientFailed = () => ({
  type: FETCH_INGREDIENT_FAILED,
})

export const setIngredient = () => {
  return {
    type: INIT_INGREDIENT,
  }
}
