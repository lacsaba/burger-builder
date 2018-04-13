import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.css';

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top"/>
      <Ingredient type="salad"/>
      <Ingredient type="cheese"/>
      <Ingredient type="meat"/>
      <Ingredient type="cheese"/>
      <Ingredient type="bread-bottom"/>
    </div>
  );
};

Burger.propTypes = {
  //myProp: PropTypes.object.isRequired
};

export default Burger;
