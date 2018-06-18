import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    const {ingredients} = this.props;
    let summary = <Redirect to="/"/>;

    if (ingredients) {
      summary = (
        <div>
          <CheckoutSummary
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
            ingredients={ingredients}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}/>
        </div>
      );
    }

    return summary;
  }
}

Checkout.propTypes = {};

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients
  }
};

export default connect(mapStateToProps)(Checkout);
