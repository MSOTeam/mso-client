import { useEffect, useState } from "react";

import Card from "../components/Card";
import { fetcher } from "../util/helpers";
import { tokenId } from "../util/state";
import { useRecoilState } from "recoil";
import useSWR from "swr";

const Index = () => {
  const [token] = useRecoilState(tokenId);
  const url = "http://localhost:5000/article/?tag=";
  const { data, error } = useSWR([url, token], fetcher);
  const { content } = useSWR(["/api/articles/dfd", token], fetcher);
  return (
    <>
      {data?.articles?.length >= 1 &&
        data?.articles?.map((item) => <Card item={item} />)}
      <div style={{ marginBottom: "10px" }} />
    </>
  );
};

// export async function getServerSideProps() {
//   const t = await fetcher('http://localhost:5000/article/?tag=', token)
//   return { props: { t } }
// }

export default Index;
