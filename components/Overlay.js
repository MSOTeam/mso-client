import { Archive, ClosePurple } from "../util/icon";
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
              <CloseWrapper onClick={hide}>
                <ClosePurple />
              </CloseWrapper>
              <Change>
                <P>Change or add</P>
                <Input />
              </Change>
              <Change>
                <P>Add collaborators</P>
                <Input />
              </Change>
              <Change>
                <P>Tag visibility</P>
                <Flex>
                  <Flex>
                    <Radio
                      type="radio"
                      id="Public"
                      name="type"
                      value="Public"
                    />
                      <Label for="Public">Public</Label>
                  </Flex>
                  <Flex>
                    <Radio
                      type="radio"
                      id="Private"
                      name="type"
                      value="Private"
                    />
                      <Label for="Private">Private</Label>
                  </Flex>
                </Flex>
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

const CloseWrapper = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
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
  position: relative;
`;

const Radio = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  margin-left: 2px;
  margin-right: 20px;
  position: relative;
  top: 2px;
`;

const Change = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.6px;
  margin: 10px 0 10px;
`;

const P = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid #b4b4b4;
  border-radius: 8px;
  height: 45px;
  font-size: 16px;
  padding-left: 10px;
  width: 96%;
  font-weight: 200;
  font-family: "Source Sans Pro", sans-serif;
  letter-spacing: 1px;
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
