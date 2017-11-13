import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from './constants';

const initialState = {
  user: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const user = action.payload;
      return Object.assign({}, state, { user });

    case LOGIN_FAILURE:
      const auth = action.payload;
      return Object.assign({}, state, auth);

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, { user: null });

    default:
      return state;
  }
};

export default reducer;
