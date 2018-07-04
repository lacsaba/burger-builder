import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {auth, checkAuthState, checkAuthTimeout, logout} from "./auth";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INIT_LOGOUT, logout);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeout);
  yield takeEvery(actionTypes.AUTH_USER, auth);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, checkAuthState);
}
