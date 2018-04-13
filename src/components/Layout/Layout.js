import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Auxi';
import classes from './Layout.css';

const Layout = (props) => {
  return (
    <Aux>
      <div>Menu</div>
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
