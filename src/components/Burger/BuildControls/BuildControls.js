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

const BuildControls = ({disabled, ingredientAdded, ingredientRemoved}) => (
    <div className={classes.BuildControls}>
      {controls.map(ctrl =>
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      )}
    </div>
  );

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func.isRequired
};

export default BuildControls;
