import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = ({isAuthenticated}) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    {isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
    {isAuthenticated
      ? <NavigationItem link="/logout">Logout</NavigationItem>
      : <NavigationItem link="/auth">Authenticate</NavigationItem>}

  </ul>
);

NavigationItems.propTypes = {
  //myProp: PropTypes.object.isRequired
};

export default NavigationItems;
