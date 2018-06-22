import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = ({toggle, isAuthenticated}) => (
  <header className={classes.Toolbar}>
    <DrawerToggle toggle={toggle}/>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={isAuthenticated}/>
    </nav>
  </header>
);

Toolbar.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default Toolbar;
