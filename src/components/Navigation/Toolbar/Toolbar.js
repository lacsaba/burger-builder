import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <nav>
      <NavigationItems/>
    </nav>
  </header>
);

Toolbar.propTypes = {
  //myProp: PropTypes.object.isRequired
};

export default Toolbar;
