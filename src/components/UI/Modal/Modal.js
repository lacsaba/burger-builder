import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';

const Modal = ({children, show}) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.object
};

export default Modal;
