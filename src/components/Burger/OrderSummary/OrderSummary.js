import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ingredients, purchaseCanceled, purchaseContinued}) => {
  const ingredientSummary = Object.keys(ingredients)
    .map(key =>
      <li key={key}>
        <span style={{textTransform: 'capitalize'}}>{key}</span>: {ingredients[key]}
      </li>);
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button type="Danger" clicked={purchaseCanceled}>CANCEL</Button>
      <Button type="Success" clicked={purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default OrderSummary;
