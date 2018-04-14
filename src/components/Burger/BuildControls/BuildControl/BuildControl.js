import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.css';

const BuildControl = ({added, disabled, label, removed}) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick={removed} disabled={disabled}>Less</button>
      <button className={classes.More} onClick={added}>More</button>
    </div>
  );
};

BuildControl.propTypes = {
  added: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default BuildControl;
