import React from 'react';

import classes from './Order.css';

const Order = ({ingredients, price}) => {
  let convertedIngredients = [];

  for (let key in ingredients) {
    convertedIngredients.push({
      name: key,
      amount: ingredients[key]
    });
  }

  const ingredientOutput = convertedIngredients.map((ingredient) => (
    <span
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        padding: '5px',
        border: '1px solid #ccc'
      }}
      key={ingredient.name}
    >{ingredient.name} ({ingredient.amount})</span>
  ));

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>USD {Number.parseFloat(price).toFixed(2)}</strong></p>
    </div>
  )
};

export default Order;
