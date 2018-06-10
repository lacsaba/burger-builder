import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const Button = ({children, clicked, disabled, type}) => (
  <button
    className={[classes.Button, classes[type]].join(' ')}
    disabled={disabled}
    onClick={clicked}>{children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  clicked: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

export default Button;
