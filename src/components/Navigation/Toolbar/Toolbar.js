import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toolbar.css';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div>LOGO</div>
    <nav>
      ...
    </nav>
  </header>
);

Toolbar.propTypes = {
  //myProp: PropTypes.object.isRequired
};

export default Toolbar;
