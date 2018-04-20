import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Aux from '../../hoc/Auxi';
import classes from './Layout.css';

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar/>
      <SideDrawer/>
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
