import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './actionTypes'
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

const authFail = error_message => {
  return {
    type: AUTH_FAIL,
    error_message: error_message,
  }
}

const logout = () => ({
  type: AUTH_LOGOUT,
})

const checkAuthTimeout = expireTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, expireTime * 1000)
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
        dispatch(checkAuthTimeout(response.data.expiresIn))
      })
      .catch(error => {
        console.log(error)
        dispatch(authFail(error.response.data.error))
      })
  }
}
