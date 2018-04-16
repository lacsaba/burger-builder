import React from 'react';
import PropTypes from 'prop-types';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger Builder" />
  </div>
);

Logo.propTypes = {
  //myProp: PropTypes.object.isRequired
};

export default Logo;
