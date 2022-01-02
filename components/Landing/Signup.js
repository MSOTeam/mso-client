import { boxShadow, change, fadeBottom } from "../../util/animation";
import styled, { css } from "styled-components";

import SubmitLoading from "./submitloading";
import { useState } from "react";

const Signup = () => {
  const [icon, setIcon] = useState(false);
  const [spinner, setspinner] = useState(false);

  return (
    <ScEmailSection>
      <ScMessageEmail> Get notified when we launch</ScMessageEmail>

      <ScEmail>
        <ScInput placeholder="email@email.com" />
        {spinner ? (
          <Button sending>
            <SubmitLoading />
          </Button>
        ) : (
          <Button idle o>
            Submit
          </Button>
        )}
      </ScEmail>
      {icon && (
        <ScSpan yes>
          Hooray, we will send you your access when we deploy 👏
        </ScSpan>
      )}
      {icon && <ScSpan no>Oops, something went wrong 😖</ScSpan>}
    </ScEmailSection>
  );
};

const ScMessageEmail = styled.p`
  line-height: 30px;
  color: white;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 18px;
`;

const ScEmailSection = styled.div`
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
  animation-delay: 1.8s;
  @media (max-width: 900px) {
    margin-top: 50px;
  }
`;

const ScEmail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${boxShadow} 1.5s linear infinite;
  animation-direction: alternate;
  border-radius: 10px;
  @media (max-width: 1000px) {
  }
`;

const ScInput = styled.input`
  background: #fff;
  color: #000;
  height: 62px;
  width: 140%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: none;
  cursor: pointer;
  padding-left: 20px;
  outline: none;
  font-size: 18px;
  font-weight: 300;

  &::placeholder {
    color: #5c5c5c;
    letter-spacing: 1px;
    opacity: 0.7;
    font-weight: 300;
    font-weight: 300;
    font-family: proxima-nova, sans-serif;
  }
  &:hover {
    cursor: text;
  }
  @media (max-width: 1000px) {
    width: 96%;
    padding-left: 4%;
  }
`;

const ScButton = styled.div`
  background: #40359c;
  color: #fff;
  height: 50px;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
  ${(props) =>
    props.idle &&
    css`
      &:hover {
        animation: ${change} 0.3s linear;
        animation-fill-mode: forwards;
        background: hsl(181, 66%, 47%);
      }
    `}
  ${(props) =>
    props.disabled === true &&
    css`
      background: rgba(57, 60, 63, 0.13);
    `}
  ${(props) =>
    props.sending &&
    css`
      &:hover {
        background: #40359c;
      }
    `}
  @media (max-width: 1000px) {
    margin-top: 20px;
    width: 100%;
  }
`;

const ScSpan = styled.div`
  color: #fff;
  margin-top: 25px;
  margin-bottom: -25px;
  font-size: 1.2em;
  display: none;
  ${(props) =>
    props.no &&
    css`
      display: block;
    `}
  ${(props) =>
    props.yes &&
    css`
      display: block;
    `}
`;

const Button = styled.div`
  background: #29c3c6;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  letter-spacing: 1px;
  font-weight: 300;
  padding: 7px 40px;
  transition: all 0.3s;
  font-size: 18px !important;

  &:hover {
    cursor: pointer;
    background: #27b6b9;
  }
`;
export default Signup;
