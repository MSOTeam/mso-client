import { Lock, LogoW } from "../../util/icon";
import styled, {css} from "styled-components";

import { color } from "../../util/color";
import { fadeTop } from '../../util/animation';

const Nav = () => {
  return (
    <NavWrapper>
      <LogoW />
      <NavItemWrapper>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {/* <Navitem id="why">Why tagit</Navitem>
        <Navitem id="features">Features</Navitem>
        <Navitem id="features">Pricing</Navitem> */}
          <Navitem style={{ opacity: "1" }}>
            <div
              id="login"
              style={{
                width: "43px",
                height: "38px",
                position: "absolute",
                right: "0",
                top: "0",
              }}
            />
            <Lock />
          </Navitem>
          {/* <Navitem signup id="signup">Sign up</Navitem> */}
        </div>
      </NavItemWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  margin: 0 10%;
  opacity: 0;
  animation: ${fadeTop} 1.3s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1s;

  @media (min-width: 2150px) {
    padding: 0 10%;
  }
  @media (max-width: 900px) {
    margin-bottom: 0;
  }
  @media (max-width: 415px) {
    height: 100px;
  }
`;

const Navitem = styled.div`
  cursor: pointer;
  align-self: center;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: #fff;
  z-index: 1;
  position: relative;
  padding: 0.5em 1em;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #29c3c6;
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }
  ${(props) =>
    props.logo &&
    css`
      padding-left: 0;
    `}
  ${(props) =>
    props.signup &&
    css`
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

const NavItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Nav;
