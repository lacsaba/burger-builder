import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../Navigation/Toolbar/Toolbar';

import Aux from '../../hoc/Auxi';
import classes from './Layout.css';

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar/>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

Layout.propTypes = {
  //myProp: PropTypes.object.isRequired
};

export default Layout;
