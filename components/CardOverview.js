import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

import styled, { css } from "styled-components";
import { useCallback, useState } from "react";

import { ClosePurple } from "../util/icon";
import Tags from "@yaireo/tagify/dist/react.tagify"; // React-wrapper file
import usePortal from "react-cool-portal";

const baseTagifySettings = {
  blacklist: ["xxx", "yyy", "zzz"],
  backspace: "edit",
  addTagOnBlur: false,
  placeholder: "",
  autofocus: true,
  dropdown: {
    enabled: 2,
    maxItems: 10,
  },
};

const Overlay = ({ children, tag, id }) => {
  const [tags, setTags] = useState([]);
  const { Portal, isShow, show, hide, toggle } = usePortal({
    defaultShow: false,
    onShow: (e) => {},
    onHide: (e) => {},
  });

  const Submit = () => {
    fetch("/api/updateTags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        tags: tags,
      }),
    })
  };
  
  const onChange = useCallback((e) => {
    let tagsArr = [];
    // console.log(
    //   "CHANGED:",
    //   e.detail.tagify.value, // Array where each tag includes tagify's (needed) extra properties
    //   e.detail.value // a string representing the tags
    // );
    // console.log(e.detail.tagify.value);
    // console.log(e.detail?.tagify?.value?.length);

    e.detail?.tagify?.value?.length > 0 &&
      e.detail?.tagify?.value?.map((item) => tagsArr?.push(item?.value));
    setTags(tagsArr);
  }, []);

  const settings = {
    ...baseTagifySettings,
    // whitelist: suggestions,
    callbacks: {
      add: onChange,
      remove: onChange,
      blur: onChange,
      edit: onChange,
      invalid: onChange,
      click: onChange,
      focus: onChange,
      "edit:updated": onChange,
      "edit:start": onChange,
    },
  };

  return (
    <>
      <div onClick={show}>{children}</div>
      <Portal>
        <Wrapper show={show}>
          <Edit>
            <Box>
              <H2>Edit tag: {children}</H2>
              <CloseWrapper onClick={hide}>
                <ClosePurple />
              </CloseWrapper>
              <Change>
                <P>Change tags</P>
                <Tags
                  defaultValue={tag}
                  settings={settings}
                  onChange={onChange}
                />
              </Change>
              <Action>
                <Save onClick={() => Submit()}>Save</Save>
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
  height: 50px;
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

const Background = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: #5649cf;
  opacity: 0.8;
`;

const Save = styled.div`
  background: #5649cf;
  width: 100%;
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
