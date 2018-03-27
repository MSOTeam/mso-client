import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Login from '../account/Login';
import Overlay from './component/Overlay';
import { Flex, Box } from 'grid-styled'
import { color } from '../../styles/color';
import Logo from '../../assets/img/logo_big.svg';
import IconSVG from '../../assets/img/icon.svg';
import Crooked from '../../assets/img/crooked.svg';

<Box
  width={[
    1/10,
    2/10,
    3/10,
    4/10,
    5/10,
    6/10,
    7/10,
    8/10,
    9/10,
    10/10
  ]}
/>

const Navgrid = styled(Flex)`
  height: 100px;
  border-bottom: 1px solid ${color.lightgrey} 
  justify-content: space-between;
  margin: 0 2.5vw;
`;

const Navitem = styled(Box)`
  cursor: pointer;
  align-self: center;
`

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = event => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
    this.setState({ type: event.target.id });
  }

  render() {
    const { isOpen } = this.state;
    const { children, dispatch } = this.props;
    return (
      <div>
        <Navgrid>
          <Navitem width={[  1, 10/10, 3/10, 5/10, 6/10, 8/10 ]} onClick={() => dispatch(push('/'))}><img src={Logo} /></Navitem>
          <Navitem onClick={() => dispatch(push('/search'))}>Find a Personal Shopper</Navitem>
          <Navitem>Become a Personal Shopper</Navitem>
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
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              zIndex: '10',             
            },
            content: {
              width: '600px',
              margin: 'auto',
              maxHeight: '50%'
            }
          }}>
        <Overlay type={this.state.type} />
        </Modal>
      </div>
    );
  }
}

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Navigation);

