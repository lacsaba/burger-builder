import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Auxi';

const Layout = (props) => {
  return (
    <Aux>
      <div></div>
      <main>
        {props.children}
      </main>
    </Aux>
  );
};

Layout.propTypes = {
  //myProp: PropTypes.object.isRequired
};

export default Layout;
