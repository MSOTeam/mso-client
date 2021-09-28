import React, { CSSProperties } from "react";
import styled, { css } from "styled-components";

import Link from "next/link";

const Card = ({ item }) => {
  return (
    <Wrapper href={item?.url} target="_blank">
      <ImageWrapper>
        {item?.image === undefined ||
        item?.image?.startsWith("data") ||
        item?.image?.includes("filter") ||
        item?.image?.includes("object") ||
        item?.image === "" ? (
          <Image
            src={`https://picsum.photos/600/300.webp?random=${Math.floor(
              Math.random() * 10
            )}`}
          />
        ) : (
          <Image src={item?.image} />
        )}
      </ImageWrapper>
      <BottomWrapper>
        <Text>{item?.title}</Text>
        <TagsWrapper>
          {item?.tags?.length >= 1 &&
            item?.tags?.map((item) => (
              <Link href={`/${item}`} key={item?.tags?.length}>
                <Tags>#{item}</Tags>
              </Link>
            ))}
        </TagsWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  color: #000;
  text-decoration: none;
  box-shadow: rgb(0 0 0 / 7%) 0px 2px 40px 0px;
  border-radius: 8px;
  transition: all 0.5s;
  position: relative;
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
  transform: translateZ(0);
  max-height: 310px;
  height: 310px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
    transform: translate(0, -4px);
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  height: 200px;
  margin-bottom: 10px;
  position: relative;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  ${({ src, c1, c2 }) => css`
    ${src &&
    css`
      background-image: url(${src});
      background-size: cover;
      background-position: center;
    `}
    ${c1 &&
    css`
      background: #${c1};
    `}
  `};
`;

const Text = styled.p`
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
  padding: 0 15px;
  margin: 5px 0;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 33%;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 15px 15px;
`;

export const Tags = styled.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
  margin-right: 10px;
  line-height: 24px;
  color: #5649cf;
  border: 0.2px solid rgb(0 0 0 / 8%);
  padding: 0px 8px;
  border-radius: 20px;
  transition: all 0.2s linear;
  &:hover {
    background: rgb(0 0 0 / 3%);
  }
`;

export default React.memo(Card);
