import { handleActions } from 'redux-actions'
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../actions/actionTypes'

const initialState = {
  token: null,
  userID: null,
  error: null,
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
      loading: false,
    }),
    [AUTH_FAIL]: (state, { error }) => ({
      ...state,
      error: error,
      loading: false,
    }),
  },
  initialState,
)

export default reducer
