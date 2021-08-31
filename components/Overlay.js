import { Archive, LogoWhite, Menu } from "../util/icon";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";

import { EditSidebar } from "../util/icon";
import usePortal from "react-cool-portal";

const Overlay = ({ children, visibility, tag }) => {
  const { Portal, isShow, show, hide, toggle } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    onShow: (e) => {
      // Triggered when portal is shown
      // The event object will be the parameter of "show(e?)"
    },
    onHide: (e) => {
      // Triggered when portal is hidden
      // The event object will be the parameter of "hide(e?)", it maybe MouseEvent (on clicks outside) or KeyboardEvent (press ESC key)
    },
  });

  useEffect(() => {}, []);

  return (
    <>
      <div onClick={show}>
        <EditSidebar />
      </div>
      <Portal>
        <Wrapper show={show}>
          <Edit>
            <Box>
              <H2>Edit tag: {children}</H2>
              <Change>
                <P>Change or add a tag</P>
                <Input />
              </Change>
              <Change>
                <P>Add collaborators</P>
                <Input />
              </Change>
              <Change>
                <P>Tag visibility</P>
                <Input />
              </Change>
              <Action>
                <Delete>
                  <Archive />
                </Delete>
                <Save>Save</Save>
              </Action>
            </Box>
          </Edit>
          <Background />
        </Wrapper>
      </Portal>
    </>
  );
};

const Wrapper = styled.div`
  display: none;
  ${({ show }) => css`
    ${show &&
    css`
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      z-index: 1;
    `}
  `};
`;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
	margin: 30px 0 20px;
`;

const Edit = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100%;
`;

const Box = styled.div`
  background: white;
  width: 400px;
  border-radius: 8px;
  color: black;
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Change = styled.div`
  width: 100%;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 1px;
  margin: 10px 0 10px;
`;

const P = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid #b4b4b4;
  border-radius: 10px;
  height: 45px;
  font-size: 18px;
  padding-left: 10px;
  width: 96%;
	font-weight: 100;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: #5649cf;
  opacity: 0.8;
`;

const Delete = styled.div`
  background: rgb(0 0 0 / 7%);
  padding: 11px 20px;
  border-radius: 100px;
`;
const Save = styled.div`
  background: #5649cf;
  width: 77%;
  border-radius: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 16px;
`;

export default Overlay;
