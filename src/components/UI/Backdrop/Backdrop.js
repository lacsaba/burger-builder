import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.css';

const Backdrop = ({clicked, show}) => (
  show ? <div className={classes.Backdrop} onClick={clicked}></div> : null
);

Backdrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool
};

export default Backdrop;
