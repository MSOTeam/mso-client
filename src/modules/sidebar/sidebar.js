import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/color';
import Menu from '../../assets/menu.svg';
import Crog from '../../assets/crog.svg';

const SidebarWrapper = styled.div`
  background: ${color.primary};
  position: absolute;
  top: 0;
  height: 100vh;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 46px 0;
  box-sizing: border-box;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <img src={Menu} alt="menu" />
      <img src={Crog} alt="crog" />
    </SidebarWrapper>
  );
};

export default Sidebar;
