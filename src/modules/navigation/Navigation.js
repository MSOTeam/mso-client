import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes, ThemeProvider} from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Overlay from './component/Overlay';
import { Flex, Box } from 'grid-styled'
import { color } from '../../styles/color';
import Logo from '../../assets/logo_p_text_small.svg';
import * as actions from './actions';

const Navgrid = styled(Flex)`
  height: 100px;
  border-bottom: 1px solid ${color.lightgrey} 
  justify-content: space-between;
  margin: 0 2.5vw;
`;

const Navitem = styled(Box)`
  cursor: pointer;
  align-self: center;
  font-weight: 100;
  font-size: 14px;
  ${props => props.id === "logo" && css`
    display: flex;
    align-items: center;

    > img {
      position: relative;
      bottom: 2px;
    }
    > small {
      font-style:italic;
      font-weight:200;
      margin-left: 25px;
    }
  `}
  ${props => props.id === "signup" && css`
    font-weight: 600;
  `}
`;

class Navigation extends Component {
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
    const { children, dispatch } = this.props;
    return (
      <div>
        <Navgrid>
          <img src={Logo}/>
          <Navitem id="signup" onClick={this.toggleModal}>Sign up</Navitem>
          <Navitem id="login" onClick={this.toggleModal}>Log in</Navitem>
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
      </div>
    );
  }
}

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isOpen: state.navigation.isOpen,
  }
}

export default connect(mapStateToProps)(Navigation);

