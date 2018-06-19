import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject(state, {error: true});
    default: return state;
  }
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const addIngredient = (state, action) => {
  return cumulateIngredient(state, action, 'add');
};

const removeIngredient = (state, action) => {
  return cumulateIngredient(state, action, 'subtract');
};

const cumulateIngredient = (state, action, operator) => {
  const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] +  (operator === 'add' ? 1 : -1)};
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + (operator === 'add' ? INGREDIENT_PRICES[action.ingredientName] : -INGREDIENT_PRICES[action.ingredientName])
  };

  return updateObject(state, updatedState);
};

const setIngredients = (state, action) => ({
  ...state,
  ingredients: {
    salad: action.ingredients.salad,
    bacon: action.ingredients.bacon,
    cheese: action.ingredients.cheese,
    meat: action.ingredients.meat
  },
  error: false,
  totalPrice: initialState.totalPrice
});

export default reducer;
