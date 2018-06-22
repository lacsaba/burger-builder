import axios from 'axios';
import {apiKey} from "./apiKey";

import * as actionTypes from './actionTypes';

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSuccess = (idToken, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  idToken,
  userId
});

export const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error
});

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    const baseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
    let url = `${baseUrl}/signupNewUser?key=${apiKey}`;

    if (!isSignup) {
      url = `${baseUrl}/verifyPassword?key=${apiKey}`;
    }

    axios.post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};
