import { CardActions } from "./index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Card = ({ item }) => {
  function add3Dots(string, limit) {
    var dots = "...";
    if (string.length > limit) {
      string = string.substring(0, limit) + dots;
    }
    return string;
  }

  return (
    <Wrapper href={item?.url} target="_blank">
      <Box>
        <CardActions article={item} tags={item?.tags} id={item?._id} />
        <ImageWrapper>
          <Img
            src={item?.image}
            width={0}
            sizes="50vw"
            height={0}
            layout="fill"
            alt="image"
          ></Img>
        </ImageWrapper>
      </Box>
      <BottomWrapper>
        <Text>{add3Dots(item?.title, 55)}</Text>
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
  min-height: 310px;
  position: relative;
  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
    transform: translate(0, -4px);
  }
`;

const Box = styled.div`
  overflow: hidden;
  height: 200px;
  margin-bottom: 10px;
  position: relative;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const ImageWrapper = styled.div``;

const Img = styled(Image)`
  object-fit: cover;
`;

const Text = styled.p`
  font-weight: 600;
  font-style: normal;
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  min-height: 60px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
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
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
  line-height: 24px;
  color: #5649cf;
  /* border: 0.2px solid rgb(0 0 0 / 5%); */
  margin-right: 5px;
  padding: 0px 7px;
  border-radius: 20px;
  transition: all 0.2s linear;
  &:hover {
    background: #e7e7e7;
  }
`;

export default React.memo(Card);
