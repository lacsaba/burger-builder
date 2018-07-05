import {delay} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import axios from 'axios';

import * as actions from "../actions";

export function* logout(action) {

  // Using call makes it easier to mock localStorage (or anything else)
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'expirationDate');
  yield call([localStorage, 'removeItem'], 'userId');
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeout(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* auth(action) {
  yield put(actions.authStart());

  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };

  const baseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  let url = `${baseUrl}/signupNewUser?key=AIzaSyB3iRtB3r-8gCNVozuR75bs5PJhaGEg9_I`;

  if (!action.isSignup) {
    url = `${baseUrl}/verifyPassword?key=AIzaSyB3iRtB3r-8gCNVozuR75bs5PJhaGEg9_I`;
  }

  try {
    const response = yield axios.post(url, authData);
    const {expiresIn, idToken, localId} = response.data;
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    localStorage.setItem('token', idToken);
    localStorage.setItem('expirationDate', expirationDate);
    localStorage.setItem('userId', localId);
    yield put(actions.authSuccess(idToken, localId));
    yield put(actions.checkAuthTimeout(expiresIn));
  } catch(error) {
    yield put(actions.authFail(error.response.data.error));
  }
}

export function* checkAuthState(action) {
  const token = localStorage.getItem('token');

  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    if (expirationDate > new Date()) {
      const userId = localStorage.getItem('userId');
      yield put(actions.authSuccess(token, userId));
      yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    } else {
      yield put(actions.logout());
    }
  }
}
