import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const Modal = ({children, modalClosed, show}) => {
  return (
    <Aux>
      <Backdrop show={show} clicked={modalClosed}/>
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}>
        {children}
      </div>
    </Aux>
  );
};

Modal.propTypes = {
  children: PropTypes.object
};

export default Modal;
