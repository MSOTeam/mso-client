import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import Register from '../../register/Register';
import Login from '../../login/Login';
import X from '../../../assets/close_black.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  margin: auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  ${props => props.type === 'signup' && css`
    display: flex;
  `}
  ${props => props.type === 'login' && css`
    display: flex;
  `}
`;

const Modal = styled.div`
  position: relative;
  z-index: 1;
  width: 500px;
  margin: auto;
  height: 500px;
  background: white;
  padding-top: 20px;
  overflow: hidden;
  border-radius: 5px;
`;

const Background = styled.div`
  background-color: rgb(86, 73, 207, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  height: 100vh;
  width: 100vw;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Overlay = (props) => {
  const [type, setType] = useState(0);

  useEffect(() => {
    setType(props.type);
  }, [props]);

  const Close = () => {
    setType(type === '');
  };

  return (
    <Wrapper type={type}>
      {type === 'signup' ? (
        <Modal>
          <Register type={type} />
          <CloseIcon src={X} onClick={Close} />
        </Modal>
      ) : (
        <Modal>
          <Login type={type} />
          <CloseIcon src={X} onClick={Close} />
        </Modal>
      )}
      <Background onClick={Close} />
    </Wrapper>
  );
};

Overlay.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Overlay;
