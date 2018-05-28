import {
  ADD_INGREDIENT,
  DECREASE_INGREDIENT,
  SET_INGREDIENT,
  FETCH_INGREDIENT_FAILED,
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

const fetchIngredient = ingredients => ({
  type: SET_INGREDIENT,
  ingredients: ingredients,
})

const fetchIngredientFailed = () => ({
  type: FETCH_INGREDIENT_FAILED,
})

export const setIngredient = () => {
  return dispatch => {
    axios
      .get('/ingredients.json')
      .then(response => {
        dispatch(fetchIngredient(response.data))
      })
      .catch(error => {
        dispatch(fetchIngredientFailed())
      })
  }
}
