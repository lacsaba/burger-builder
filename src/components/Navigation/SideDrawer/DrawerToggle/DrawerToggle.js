import React from 'react';
import PropTypes from 'prop-types';

import classes from './DrawerToggle.css';

const DrawerToggle = ({toggle}) => (
  <div className={classes.DrawerToggle} onClick={toggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

DrawerToggle.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default DrawerToggle;
