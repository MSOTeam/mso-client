import { useEffect, useState } from 'react';
import { fetcher } from '../util/helpers'
import styled from 'styled-components';
import useSWR from 'swr'
import { sidebarStatus, tokenId } from "../util/state";
import { useRecoilState } from "recoil";
import { LogoWhite } from "../util/icon";

const Wrapper = styled.div`
  background: linear-gradient(122deg, rgb(86, 73, 207), rgb(11, 25, 99));
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
  overflow: scroll;
  padding: 20px 30px;
  ${(props) =>
    props.bread &&
    css`
      font-weight: 100;
    `}
  ${(props) =>
    props.edit &&
    css`
      display: none;
      width: 10%;
    `}
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const LogoWrapper = styled.div`
  margin: 10px 0;
`;

const Item = styled.span`
  font-size: 0.9em;
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Sidebar = () => {
  const [token, setToken] = useRecoilState(tokenId);
  const [sidebar, setSidebar] = useRecoilState(sidebarStatus);

  const url = 'http://localhost:5000/tag';

  const { data, error } = useSWR(
    [url, token],
    fetcher
  );

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoWhite />
      </LogoWrapper>
      {data?.tags?.length >= 1 && data?.tags?.map((item) => (
        <Item onClick={() => setSidebar(!sidebar)}>{item?.tag}</Item>
      ))}
    </Wrapper>
  );
};

// export async function getServerSideProps() {
//   const tags = await fetcher('http://localhost:5000/tag', localStorage.getItem("token"))
//   return { props: { t } }
// }

// export const getServerSideProps = async (context) => {
//   const hero = await graphQlClient.request(HERO_IMAGES, {
//     tag: "frontpage",
//   });

//   const services = await graphQlClient.request(SERVICE_TYPES);

//   return {
//     props: { hero, services },
//   };
// };



export default Sidebar;
