import { fetcher } from '../util/helpers'
import useSWR from 'swr'
import { tokenId } from "../util/state";
import { useEffect, useState } from 'react';
import { useRecoilState } from "recoil";
import Card from '../components/Card'

const Index = () => {
  const [token, setToken] = useRecoilState(tokenId);

  const url = 'http://localhost:5000/article/?tag=';

  const { data, error } = useSWR([url, token], fetcher);

  useEffect(() => {
    setToken(localStorage?.getItem("token"));
  }, []);

  return (
    data?.articles?.length >= 1 && data?.articles?.map((item) => (
      <Card item={item} />
    ))
  );
};

// export async function getServerSideProps() {
//   const t = await fetcher('http://localhost:5000/article/?tag=', token)
//   return { props: { t } }
// }

export default Index;
