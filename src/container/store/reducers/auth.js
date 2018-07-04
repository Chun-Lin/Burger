import { handleActions } from 'redux-actions'
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SET_AUTH_REDIRECT_PATH,
} from '../actions/actionTypes'

const initialState = {
  token: null,
  userID: null,
  error_message: null,
  loading: false,
  authRedirectPath: '/',
}

const reducer = handleActions(
  {
    [AUTH_START]: (state, actions) => ({
      ...state,
      loading: true,
    }),
    [AUTH_SUCCESS]: (state, { idToken, userId }) => ({
      ...state,
      userID: userId,
      token: idToken,
      error_message: null,
      loading: false,
    }),
    [AUTH_FAIL]: (state, { error_message }) => ({
      ...state,
      error_message: error_message.message,
      loading: false,
    }),
    [AUTH_LOGOUT]: state => ({
      ...state,
      token: null,
      userID: null,
    }),
    [SET_AUTH_REDIRECT_PATH]: (state, { path }) => ({
      ...state,
      authRedirectPath: path,
    }),
  },
  initialState,
)

export default reducer
