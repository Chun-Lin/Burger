import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from './actionTypes'
import axios from 'axios'
import API_KEY from '../../../constants/auth'

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

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart())
    const signUpData = {
      email: email,
      password: password,
      returnSecureToken: true,
    }

    const url = isSignUp
      ? `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`
      : `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`

    axios
      .post(url, signUpData)
      .then(response => {
        console.log(response)
        dispatch(authSuccess(response.data))
      })
      .catch(error => {
        console.log(error)
        dispatch(authFail(error))
      })
  }
}
