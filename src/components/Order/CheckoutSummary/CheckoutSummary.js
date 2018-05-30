import React from 'react';
import PropTypes from 'prop-types';

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from './CheckoutSummary.css';

const CheckoutSummary = ({checkoutCancelled, checkoutContinued, ingredients}) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={ingredients}/>
        <Button
          type="Danger"
          clicked={checkoutCancelled}>CANCEL</Button>
        <Button
          type="Success"
          clicked={checkoutContinued}>CONTINUE</Button>
      </div>
    </div>
  );
};

CheckoutSummary.propTypes = {
  ingredients: PropTypes.object
};

export default CheckoutSummary;
