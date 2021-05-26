import styled, { css, keyframes } from "styled-components";

import Search from "../../assets/search.svg";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
  grid-gap: 2em;
  padding: 20px 30px 0 80px;
  transition: all 0.3s;
  margin-bottom: 30px;

  ${(props) =>
    props.sidebarStatus === true &&
    css`
      padding: 20px 30px 0 280px;
    `}
  ${(props) =>
    props.category &&
    css`
      margin-bottom: 15px;
    `}
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: palevioletred;
    `}
    ${(props) =>
    props.tag === 'archive' &&
    css`
      margin-bottom: 140px;
    `}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 292px;
  height: 100%;
  box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.5s;
  position: relative;
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
  transform: translateZ(0);
  &:hover {
    box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
    transform: translate(0, -4px);
  }
`;

export const BoxOverlay = styled.div`
  overflow: hidden;
  height: 200px;
  margin-bottom: 10px;
  background: #fafafa;
  position: relative;
`;

export const Image = styled.div`
  ${(props) =>
    props.image &&
    css`
      animation: ${fadeIn} 0.2s ease-in-out;
      background: url(${props.image}) no-repeat center center;
    `}
  height: 100%;
  width: 100%;
  background-size: cover;
  transition: transform 0.1s linear;

  &:hover {
    /* transform: scale(1.02); */
  }
`;

export const Header = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  letter-spacing: 1px;
  box-sizing: border-box;
  padding: 0 10px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 10px 10px;
`;

export const Tags = styled.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
  line-height: 24px;
  color: #5649cf;
`;

export const CatName = styled.h1`
  font-size: 1.9em;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 20px 0 30px 0;
`;

export const FilteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column-end: -1;
  transition: all 0.3s;
`;

export const FilterBox = styled.input`
  background-image: url(${Search});
  background-position: -6px -6px;
  background-repeat: no-repeat;
  width: 100%;
  height: 30px;
  box-shadow: none;
  border: #eaeaea 1px solid;
  border-left: none;
  border-top: none;
  border-right: none;
  outline: none;
  box-sizing: border-box;
  padding-left: 35px;
  padding-bottom: 9px;
  font-size: 1em;
  font-weight: 300;
  letter-spacing: 1px;
`;

export const Categoryname = styled.h1`
  font-size: 1.3em;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Delete = styled.div`
  position: fixed;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 30px - 80px);
  height: 85px;
  font-size: 1.4em;
  background: black;
  color: white;
  border-radius: 8px;
  letter-spacing: 3px;
  cursor: pointer;
  right: 30px;
  left: 80px;
  transition: all 0.3s;

  ${(props) =>
    props.sidebarStatus === true &&
    css`
      width: calc(100% - 30px - 280px);

      left: 280px;
    `}
`;
