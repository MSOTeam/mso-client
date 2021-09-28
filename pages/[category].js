import styled, { css } from "styled-components";

import Card from "../components/Card";
import { fetcher } from "../util/helpers";
import { tokenId } from "../util/state";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import useSWR from "swr";

const Category = () => {
  const router = useRouter();
  const [token] = useRecoilState(tokenId);
  const url = `http://localhost:5000/article/?tag=${router.asPath.replace(
    /^\/|\/$/g,
    ""
  )}`;
  const { data, error } = useSWR([url, token], fetcher, {
    refreshInterval: 10,
  });
  return (
    <>
      {data?.articles?.length >= 1 &&
        data?.articles?.map((item) => <Card item={item} />)}

    </>
  );
};

export default Category;
