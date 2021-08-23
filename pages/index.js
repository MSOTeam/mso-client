import { fetcher } from '../util/helpers'
import useSWR from 'swr'
import { tokenId } from "../util/state";
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { useRecoilState } from "recoil";

const Card = styled.a`
color: #000;
text-decoration: none;
  box-shadow: rgb(0 0 0 / 7%) 0px 2px 40px 0px;
  border-radius: 8px;
  transition: all 0.5s;
  position: relative;
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
  transform: translateZ(0);
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
  border-top-left-radius: 0px;
  border-top-left-radius: 0px;
`;


const Image = styled.div`
height: 100%;
width: 100%;
${({ src }) => css`
    ${src &&
    css`
      background-image: url(${src});
    `}
    background-size: cover;
    background-position: center;
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
`;


const Index = () => {
  const [token, setToken] = useRecoilState(tokenId);

  const url = 'http://localhost:5000/article/?tag=';

  const { data, error } = useSWR(
    [url, token],
    fetcher
  );
  console.log(data)
  useEffect(() => {
    setToken(localStorage?.getItem("token"));
  }, []);

  return (
    <>
      {data?.articles?.length >= 1 && data?.articles?.map((item) => (
        <Card href={item?.url} target="_blank">
          <ImageWrapper>
            <Image src={item?.image} />
          </ImageWrapper>
          <BottomWrapper>
            <Text>{item?.title}</Text>
            <TagsWrapper>
              {item?.tags?.length >= 1 && item?.tags?.map((item) => (
                <Tags>{item}</Tags>
              ))}
            </TagsWrapper>
          </BottomWrapper>
        </Card>
      ))}
    </>
  );
};

// export async function getServerSideProps() {
//   const t = await fetcher('http://localhost:5000/article/?tag=', token)
//   return { props: { t } }
// }

export default Index;
