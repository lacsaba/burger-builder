import React from 'react';
import PropTypes from 'prop-types';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  );
};

SideDrawer.propTypes = {
  //myProp: PropTypes.object.isRequired
};

export default SideDrawer;
