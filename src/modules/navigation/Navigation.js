import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Overlay from './component/Overlay';
import { color } from '../../styles/color';
import * as actions from './actions';
import Logo from '../../assets/logo_w_text_small.svg';

const Navgrid = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 0 70px 0 70px;
  background: ${color.primary};
`;

const Navitem = styled.div`
  cursor: pointer;
  align-self: center;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: #fff;
  ${props => props.logo && css`
    padding-left: 0;
  `}
  ${props => props.signup && css`
    background: ${color.secondary};
    padding: 10px 15px;
    border-radius: 2px;
    color: #000;
    font-weight: bold;
    box-sizing: border-box;
  `}
  @media (max-width: 850px) {
    font-size: 0px;
    color: white;
    padding-left: 20px;
  }
`;

const ScHeadline = styled.h1`
  font-size: 3.5em;
  font-weight: 900;
  line-height: 60px;
  color: white;
  @media (max-width: 760px) {
    font-size: 2.3em;
    line-height: 45px;
  }
`;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = (event) => {
    const { dispatch } = this.props;
    dispatch(actions.toggleModal());
    this.setState({ type: event.target.id });
  }

  render() {
    const { isOpen } = this.props;
    return (
      <div style={{ height: '100vh', background: color.primary }}>
        <Navgrid>
          <img alt="logo" src={Logo} />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '500px'}}>
            <Navitem id="why">Why tagit</Navitem>
            <Navitem id="features">Features</Navitem>
            <Navitem id="features">Pricing</Navitem>
            <Navitem id="login" onClick={this.toggleModal}>Sign in</Navitem>
            <Navitem signup id="signup" onClick={this.toggleModal}>Sign up</Navitem>
          </div>
        </Navgrid>
        <Modal
          id="modal"
          isOpen={isOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.toggleModal}
          scroll={false}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: '10',
            },
            content: {
              width: '500px',
              margin: 'auto',
              maxHeight: '450px',
            },
          }}
        >
          <Overlay type={this.state.type} />
        </Modal>
        <ScHeadline>
          Just read it later
        </ScHeadline>
      </div>
    );
  }
}

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isOpen: state.navigation.isOpen,
  };
}

export default connect(mapStateToProps)(Landing);

