import axios from '../../../axios-orders'
import { put } from 'redux-saga/effects'

import { fetchIngredient, fetchIngredientFailed } from '../actions'

export function* setIngredientSaga(action) {
  try {
    const response = yield axios.get('/ingredients.json')
    yield put(fetchIngredient(response.data))
  } catch (error) {
    yield put(fetchIngredientFailed())
  }
}
