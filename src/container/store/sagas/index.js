import { takeEvery } from 'redux-saga/effects'
import {
  AUTH_INITIATE_LOGOUT,
  AUTH_CHECK_TIMEOUT,
  AUTH_USER,
} from '../actions/actionTypes'
import { logoutSaga, expireTimeSaga, authUserSaga } from './auth'

export function* watchAuth() {
  yield takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga)
  yield takeEvery(AUTH_CHECK_TIMEOUT, expireTimeSaga)
  yield takeEvery(AUTH_USER, authUserSaga)
}
