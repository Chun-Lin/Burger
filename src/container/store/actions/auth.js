import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SET_AUTH_REDIRECT_PATH,
  AUTH_INITIATE_LOGOUT,
  AUTH_CHECK_TIMEOUT,
  AUTH_USER,
  AUTH_CHECK_STATE,
} from './actionTypes'
import axios from 'axios'
import API_KEY from '../../../constants/auth'

export const authStart = () => {
  return {
    type: AUTH_START,
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  }
}

export const authFail = error_message => {
  return {
    type: AUTH_FAIL,
    error_message: error_message,
  }
}

export const logout = () => {
  return {
    type: AUTH_INITIATE_LOGOUT,
  }
}

export const logoutSucceed = () => {
  return {
    type: AUTH_LOGOUT,
  }
}

export const checkAuthTimeout = expireTime => {
  return {
    type: AUTH_CHECK_TIMEOUT,
    expireTime: expireTime,
  }
}

export const auth = (email, password, isSignUp) => {
  return {
    type: AUTH_USER,
    email: email,
    password: password,
    isSignUp: isSignUp,
  }
}

export const setAuthRedirectPath = path => {
  return {
    type: SET_AUTH_REDIRECT_PATH,
    path: path,
  }
}

export const authCheckState = () => {
  return {
    type: AUTH_CHECK_STATE
  }
}
