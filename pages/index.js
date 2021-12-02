import { articleState, deleteArticleState, tokenId } from "../util/state";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import { MyLoader } from "../util/icon";
import { fetcher } from "../util/helpers";
import { useRecoilState } from "recoil";
import useSWR from "swr";

const Index = () => {
  const [token] = useRecoilState(tokenId);
  const [deleteArticle, setDeleteArticle] = useRecoilState(deleteArticleState);
  const [articles, setArticles] = useRecoilState(articleState);
  const url = "http://localhost:5000/article/?tag=";
  const { data, error } = useSWR([url, token], fetcher);

  const { content } = useSWR(["/api/articles/dfd", token], fetcher);
  const placeholder = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  useEffect(() => {
    setArticles(data);
    setDeleteArticle(false);
  }, [data, deleteArticle]);

  console.log(articles);
  return !articles ? (
    <>
      {placeholder?.map(() => (
        <MyLoader />
      ))}
    </>
  ) : (
    <>
      {articles?.articles?.length >= 1 &&
        articles?.articles?.map(
          (item, index) => index > 2 && <Card item={item} />
        )}
    </>
  );
};

// export async function getServerSideProps() {
//   const t = await fetcher('http://localhost:5000/article/?tag=', token)
//   return { props: { t } }
// }

export default Index;
