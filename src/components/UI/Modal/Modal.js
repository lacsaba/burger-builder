import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';

const Modal = ({children}) => {
  return (
    <div className={classes.Modal}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.object
};

export default Modal;
