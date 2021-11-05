import ContentLoader, { Facebook } from "react-content-loader";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import { MyLoader } from "../util/icon";
import { fetcher } from "../util/helpers";
import { tokenId } from "../util/state";
import { useRecoilState } from "recoil";
import useSWR from "swr";

const Index = () => {
  const [token] = useRecoilState(tokenId);
  const url = "http://localhost:5000/article/?tag=";
  const { data, error } = useSWR([url, token], fetcher);
  const { content } = useSWR(["/api/articles/dfd", token], fetcher);
  const placeholder = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1];
  return !data ? (
    <>
      {placeholder?.map(() => (
        <MyLoader />
      ))}
    </>
  ) : (
    <>
      {data?.articles?.length >= 1 &&
        data?.articles?.map((item) => <Card item={item} />)}
    </>
  );
};

// export async function getServerSideProps() {
//   const t = await fetcher('http://localhost:5000/article/?tag=', token)
//   return { props: { t } }
// }

export default Index;
