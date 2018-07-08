import {put} from 'redux-saga/effects';

import * as actions from '../actions';
import axiosOrders from "../../axios-orders";

export function* initIngredients(action) {
  try {
    const response = yield axiosOrders.get('/ingredients.json');
    yield put(actions.setIngredients(response.data));
  }
  catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
