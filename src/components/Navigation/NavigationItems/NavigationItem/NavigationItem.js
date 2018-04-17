import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const NavigationItem = ({active, children, link}) => (
  <li className={classes.NavigationItem}>
    <a href={link} className={active ? classes.active : null}>{children}</a>
  </li>
);

NavigationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default NavigationItem;
