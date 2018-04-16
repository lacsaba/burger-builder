import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const Button = ({children, clicked, type}) => (
  <button
    className={[classes.Button, classes[type]].join(' ')}
    onClick={clicked}>{children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  clicked: PropTypes.func,
  type: PropTypes.string
};

export default Button;
