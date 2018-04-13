import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Aux>
        <Burger/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {
  //myProp: PropTypes.string.isRequired
};
export default BurgerBuilder;
