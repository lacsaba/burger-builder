import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    this.setState((prevState, props) => {
      return {
        ingredients: Object.assign({}, {...prevState.ingredients}, {[type]: prevState.ingredients[type] + 1}),
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
      }
    });
  };

  removeIngredientHandler = type => {
    if (!this.state.ingredients[type]) return;

    this.setState((prevState, props) => {
      return {
        ingredients: Object.assign({}, prevState.ingredients, {[type]: prevState.ingredients[type] - 1}),
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
      }
    });
  };

  render() {
    let disabledInfo = {...this.state.ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <p>Total Price: {this.state.totalPrice.toFixed(2)}</p>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}/>
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {
  //myProp: PropTypes.string.isRequired
};
export default BurgerBuilder;
