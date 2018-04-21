import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Aux from '../../hoc/Auxi';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  };

  sideDraweToggleHandler = () => {
    this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}));
  };

  render() {
    return (
      <Aux>
        <Toolbar toggle={this.sideDraweToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  //myProp: PropTypes.object.isRequired
};

export default Layout;
