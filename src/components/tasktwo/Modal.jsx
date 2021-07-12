import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalTitle, WarningSignContainer } from '../styled-components/Modal';
import { Button, ButtonsGroup } from '../styled-components/Button';

const Modal = ({
  isOpen,
  title,
  loading,
  showWarningSign,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHandler,
  secondaryButtonHandler,
  children
}) => isOpen && (
  <ModalContainer loadingModal={loading}>
    {title && (
      <ModalTitle>
        {showWarningSign && (
          <WarningSignContainer>
            <span>&#9888;</span>
          </WarningSignContainer>
        )}
        {title}
      </ModalTitle>
    )}

    {children}

    {!loading && (
    <ButtonsGroup right>
      <Button primary onClick={primaryButtonHandler}>{primaryButtonText}</Button>
      <Button onClick={secondaryButtonHandler}>{secondaryButtonText}</Button>
    </ButtonsGroup>
    )}
  </ModalContainer>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  title: PropTypes.string,
  showWarningSign: PropTypes.bool,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  primaryButtonHandler: PropTypes.func.isRequired,
  secondaryButtonHandler: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  loading: false,
  showWarningSign: false,
  title: '',
  primaryButtonText: 'Yes',
  secondaryButtonText: 'No',
};

export default Modal;
