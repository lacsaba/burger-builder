import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrders from "../../axios-orders";
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    purchasable: false,
    purchasing: false,
    totalPrice: 4,
    loading: false
  };

  componentDidMount() {
    axiosOrders.get('/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data});
      });
  }

  isPurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map(key => ingredients[key])
      .reduce((sum, el) => sum + el, 0);

    return sum > 0;
  }

  addIngredientHandler = type => {
    this.setState((prevState, props) => {
      const ingredients = Object.assign({}, {...prevState.ingredients}, {[type]: prevState.ingredients[type] + 1});

      return {
        ingredients,
        purchasable: this.isPurchasable(ingredients),
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
      }
    });
  };

  removeIngredientHandler = type => {
    if (!this.state.ingredients[type]) return;

    this.setState((prevState, props) => {
      const ingredients = Object.assign({}, prevState.ingredients, {[type]: prevState.ingredients[type] - 1});

      return {
        ingredients,
        purchasable: this.isPurchasable(ingredients),
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
      }
    });
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    let queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price=' + this.state.totalPrice);
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryParams.join('&')
    });
  };

  render() {
    let {ingredients, totalPrice, purchasable, purchasing} = this.state;
    let disabledInfo = {...this.state.ingredients};

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = <Spinner/>;

    if (this.state.ingredients) {
      burger =
        <Aux>
          <Burger ingredients={ingredients}/>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            ordered={this.purchaseHandler}
            price={totalPrice}
            purchasable={purchasable}/>
        </Aux>;

      orderSummary = <OrderSummary
        ingredients={ingredients}
        price={totalPrice}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
      />;
    }

    if (this.state.loading) {
      orderSummary = <Spinner/>
    }

    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {
  //myProp: PropTypes.string.isRequired
};

export default withErrorHandler(BurgerBuilder, axiosOrders);
