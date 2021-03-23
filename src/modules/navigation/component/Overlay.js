import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Login from '../../login/Login';
import PropTypes from 'prop-types';
import Register from '../../register/Register';
import X from '../../../assets/close_black.svg';
import { color } from '../../../styles/color';

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
  height: 400px;
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

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Action = styled.p`
  letter-spacing: 1px;
  margin: 10px 0 30px;
`;

const ActionLink = styled.span`
  color: ${color.primary};
  font-weight: 600;
  cursor: pointer;
`;

const Terms = styled.p`
  font-weight: 100;
  font-size: 0.9em;
  cursor: pointer;
  color: ${color.dark};
  margin-top: 10px;
  letter-spacing: 1px;
`;


const Overlay = (props) => {
  const [type, setType] = useState(0);
  useEffect(() => {
    setType(props.type);
  }, [props]);
  const Close = () => {
    setType(type === '');
  };

  const Change = (event) => {
    props.handle(event);
  };

  return (
    <Wrapper type={type}>
      {type === 'signup' ? (
        <Modal>
          <Register type={type} />
          <CloseIcon src={X} onClick={Close} />
          <ActionWrapper>
            <Action>Already have an account? <ActionLink id="login" onClick={Change}>Sign in</ActionLink></Action>
            <Terms>Terms of Service | Privacy Policy</Terms>
          </ActionWrapper>
        </Modal>
      ) : (
        <Modal>
          <Login type={type} />
          <CloseIcon src={X} onClick={Close} />
          <ActionWrapper>
            <Action>Don't have an account? <ActionLink id="signup" onClick={Change}>Create one</ActionLink></Action>
            <Terms>Terms of Service | Privacy Policy</Terms>
          </ActionWrapper>
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
