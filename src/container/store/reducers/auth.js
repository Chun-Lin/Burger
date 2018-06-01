import { handleActions } from 'redux-actions'
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../actions/actionTypes'

const initialState = {
  token: null,
  userID: null,
  error_message: null,
  loading: false,
}

const reducer = handleActions(
  {
    [AUTH_START]: (state, actions) => ({
      ...state,
      loading: true,
    }),
    [AUTH_SUCCESS]: (state, { authData }) => ({
      ...state,
      userID: authData.localId,
      token: authData.idToken,
      error_message: null,
      loading: false,
    }),
    [AUTH_FAIL]: (state, { error_message }) => ({
      ...state,
      error_message: error_message.message,
      loading: false,
    }),
  },
  initialState,
)

export default reducer
