import styled from "styled-components";

const Landing = ({ data }) => {
  return (
    <Wrapper>
      <CircleTop />
      <CircleBottom />
      <Small>Developed in Iceland</Small>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: linear-gradient(#6955e2, #28a6c8);
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  height: 100vh;
  @media (max-width: 900px) {
    height: 100%;
    min-height: 100vh;
  }
`;

const CircleTop = styled.div`
  width: 1500px;
  height: 1500px;
  background: rgb(91, 95, 203);
  opacity: 0.6;
  border-radius: 100%;
  position: absolute;
  top: -20%;
  right: -20%;
  z-index: 1;
`;

const CircleBottom = styled.div`
  width: 1000px;
  height: 1000px;
  border-radius: 100%;
  background: #4384d3;
  position: absolute;
  bottom: -20%;
  left: -20%;
  opacity: 0.3;
`;

const Small = styled.small`
    width: 100vw;
    background: black;
    color: white;
    position: absolute;
    bottom: 0;
    z-index: 100;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    letter-spacing: 1px;
`;

export default Landing;
