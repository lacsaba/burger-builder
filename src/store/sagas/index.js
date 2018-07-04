import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {auth, checkAuthState, checkAuthTimeout, logout} from "./auth";
import {initIngredients} from './burgerBuilder';
import {fetchOrders, purchaseBurger} from './order';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INIT_LOGOUT, logout);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeout);
  yield takeEvery(actionTypes.AUTH_USER, auth);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, checkAuthState);
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredients);
  yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurger);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrders);
}
