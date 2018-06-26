import React from 'react';
import PropTypes from 'prop-types';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Auxi';
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = ({open, closed, isAuthenticated}) => {
  const attachedClasses = [
    classes.SideDrawer,
    open ? classes.Open : classes.Close
  ];

  return (
    <Aux>
      <Backdrop show={open} clicked={closed}/>
      <div className={attachedClasses.join(' ')} onClick={closed}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems isAuthenticated={isAuthenticated}/>
        </nav>
      </div>
    </Aux>
  );
};

SideDrawer.propTypes = {
  closed: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default SideDrawer;
