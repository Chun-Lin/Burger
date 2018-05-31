import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from './actionTypes'

const authStart = () => {
  return {
    type: AUTH_START,
  }
}

const authSuccess = authData => {
  return {
    type: AUTH_SUCCESS,
    authData: authData,
  }
}

const authFail = error => {
  return {
    type: AUTH_FAIL,
    error: error,
  }
}

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart())
  }
}
