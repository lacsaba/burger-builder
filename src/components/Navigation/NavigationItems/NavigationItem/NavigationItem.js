import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const NavigationItem = ({active, children, exact, link}) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={link}
      exact={exact}
      activeClassName={classes.active}
    >{children}</NavLink>
  </li>
);

NavigationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  link: PropTypes.string
};

export default NavigationItem;
