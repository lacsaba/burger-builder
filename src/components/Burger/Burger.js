import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.css';

const Burger = ({ingredients}) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(key => [...Array(ingredients[key])]
      .map((_, i) => <Ingredient key={key + i} type={key}/>))
    .reduce((arr, el) => arr.concat(el), []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients.</p>;
  }

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top"/>
      {transformedIngredients}
      <Ingredient type="bread-bottom"/>
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default Burger;
