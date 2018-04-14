import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const BuildControls = ({disabled, ingredientAdded, ingredientRemoved, ordered, price, purchasable}) => (
    <div className={classes.BuildControls}>
      <p>Current price: <strong>{price.toFixed(2)} $</strong></p>
      {controls.map(ctrl =>
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      )}
      <button
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={ordered}>ORDER NOW</button>
    </div>
  );

BuildControls.propTypes = {
  disabled: PropTypes.objectOf(Boolean).isRequired,
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  ordered: PropTypes.func,
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool
};

export default BuildControls;
