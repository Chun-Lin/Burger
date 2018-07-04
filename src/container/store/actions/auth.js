import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SET_AUTH_REDIRECT_PATH,
} from './actionTypes'
import axios from 'axios'
import API_KEY from '../../../constants/auth'

const authStart = () => {
  return {
    type: AUTH_START,
  }
}

const authSuccess = (token, userId) => {
  return {
    type: AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  }
}

const authFail = error_message => {
  return {
    type: AUTH_FAIL,
    error_message: error_message,
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expirationTime')
  localStorage.removeItem('userId')
  return {
    type: AUTH_LOGOUT,
  }
}

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
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000,
        )
        localStorage.setItem('token', response.data.idToken)
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem('userId', response.data.localId)
        dispatch(authSuccess(response.data.idToken, response.data.localId))
        dispatch(checkAuthTimeout(response.data.expiresIn))
      })
      .catch(error => {
        dispatch(authFail(error.response.data.error))
      })
  }
}

export const setAuthRedirectPath = path => {
  return {
    type: SET_AUTH_REDIRECT_PATH,
    path: path,
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token')
    const expirationDate = new Date(localStorage.getItem('expirationDate'))
    const userId = localStorage.getItem('userId')
    if (!token) {
      dispatch(logout())
    } else if (expirationDate <= new Date()) {
      dispatch(logout())
    } else {
      dispatch(authSuccess(token, userId))
      dispatch(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000,
        ),
      )
    }
  }
}
