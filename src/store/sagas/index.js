import {all, takeEvery, takeLatest} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {auth, checkAuthState, checkAuthTimeout, logout} from "./auth";
import {initIngredients} from './burgerBuilder';
import {fetchOrders, purchaseBurger} from './order';

export function* watchAuth() {
  // all is useful if you want to run multiple concurrent requests to the server
  yield all([
    takeEvery(actionTypes.AUTH_INIT_LOGOUT, logout),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeout),
    takeEvery(actionTypes.AUTH_USER, auth),
    takeEvery(actionTypes.AUTH_CHECK_STATE, checkAuthState)
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredients);
}

export function* watchOrder() {
  // takeLatest will automatically cancel any ongoing execution for purchaseBurger saga
  // and always only executes the latest one
  yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurger);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrders);
}
