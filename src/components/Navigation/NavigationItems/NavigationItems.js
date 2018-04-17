import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

NavigationItems.propTypes = {
  //myProp: PropTypes.object.isRequired
};

export default NavigationItems;
