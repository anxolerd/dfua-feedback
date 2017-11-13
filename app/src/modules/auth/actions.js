import * as firebase from 'firebase';

import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from './constants';

const provider = new firebase.auth.GoogleAuthProvider();

const initListeners = () => (dispatch) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(loginSuccess(user));
    } else {
      dispatch(logoutSuccess());
    }
  });
};

const login = () => (dispatch) => {
  firebase.auth().signInWithPopup(provider)
    .then(result => dispatch(loginSuccess(result.user)))
    .catch(error => dispatch(loginFailure(error)));
};

const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });

const logout = () => (dispatch) => {
  firebase.auth().signOut()
    .then(() => dispatch(logoutSuccess()))
    .catch(error => dispatch(logoutFailure(error)));
};

const logoutFailure = error => ({ type: LOGOUT_FAILURE, payload: error });

const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

export {
  initListeners,
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
}
