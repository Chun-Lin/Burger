import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import axios from '../../../axios-orders'
import API_KEY from '../../../constants/auth'

import {
  logoutSucceed,
  logout,
  authStart,
  authSuccess,
  authFail,
  checkAuthTimeout,
} from '../actions/auth'

export function* logoutSaga(action) {
  yield localStorage.removeItem('token')
  yield localStorage.removeItem('expirationTime')
  yield localStorage.removeItem('userId')
  yield put(logoutSucceed())
}

export function* expireTimeSaga(action) {
  yield delay(action.expireTime * 1000)
  yield put(logout())
}

export function* authUserSaga(action) {
  yield put(authStart())
  const signUpData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  }

  const url = action.isSignUp
    ? `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`
    : `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`

  try {
    const response = yield axios.post(url, signUpData)

    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000,
    )
    yield localStorage.setItem('token', response.data.idToken)
    yield localStorage.setItem('expirationDate', expirationDate)
    yield localStorage.setItem('userId', response.data.localId)
    yield put(authSuccess(response.data.idToken, response.data.localId))
    yield put(checkAuthTimeout(response.data.expiresIn))
  } catch (error) {
    yield put(authFail(error.response.data.error))
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token')
  const expirationDate = yield new Date(localStorage.getItem('expirationDate'))
  const userId = yield localStorage.getItem('userId')
  if (!token) {
    yield put(logout())
  } else if (expirationDate <= new Date()) {
    yield put(logout())
  } else {
    yield put(authSuccess(token, userId))
    yield put(
      checkAuthTimeout(
        (expirationDate.getTime() - new Date().getTime()) / 1000,
      ),
    )
  }
}
