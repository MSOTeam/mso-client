import { Archive, Close, Fav, Logo, Menu, Plug, Unsorted } from "../util/icon";
import styled, { css } from "styled-components";

import Link from 'next/link'

const Actions = () => {
  return (
    <Navgrid>
      <Link Link href={`/`}>
        <Navitem>
          <Logo />
        </Navitem>
      </Link>

     <Flex>
      <Extension
        title="Add the tagit extension"
        href="https://chrome.google.com/webstore/detail/tagit-extension/jgamfimmaiipbddhkgopfbhddjejfnji?hl=en&authuser=0&fbclid=IwAR2Il_4GAm0CwhGhZg_4Yq2_s1-r0hTZtDvRdagljuQrZ8vxRyn3ODvYbwQ"
        target="_blank"
      >
        <Plug />
        <span>Click to add extension</span>
      </Extension>
      <AddUrl type="text" />
  
      <Link href={`/favorites`}>
        <Navitem>
          <Fav />
        </Navitem>
      </Link>

      <Link href={`/unsorted`}>
        <Navitem>
          <Unsorted />
        </Navitem>
      </Link>

      <Link href={`/archive`}>
        <Navitem>
          <Archive />
        </Navitem>
      </Link>

    </Flex>
  </Navgrid>
  );
};

const Navgrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 27px 30px 10px 0px;

`;

const Navitem = styled.a`
  cursor: pointer;
  display: flex;
  align-self: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding-left: 30px;
  box-sizing: border-box;
  ${(props) =>
    props.logo &&
    css`
      padding-left: 0;
    `}
`;

const Extension = styled.a`
  background: #5649cf;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 27px;
  font-size: 14px;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 300;
  > span {
    margin-left: 10px;
  }
  @media (max-width: 1024px) {
   display: none;

  }
`;

const AddUrl = styled.input`
  display: none;
`;

const Flex = styled.div`
  display: flex;
`;

export default Actions;
