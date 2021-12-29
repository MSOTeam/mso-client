import Card from "../components/Card";
import { MyLoader } from "../util/icon";
import { dataRefreshState } from "../util/state";
import { fetcher } from "../util/helpers";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import useSWR from "swr";

const Index = ({ data }) => {
  const placeholder = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const router = useRouter();
  const [dataRefresh, setDataRefresh] = useRecoilState(dataRefreshState);

  // const { data } = useSWR(["/api/articles"], fetcher);
  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    console.log(dataRefresh)
    refreshData();
    setDataRefresh(false);
  }, [dataRefresh]);

  return !data ? (
    <>
      {placeholder?.map(() => (
        <MyLoader />
      ))}
    </>
  ) : (
    <>
      {data?.length > 0 &&
        data?.map((item) =>
          item?.tags?.includes("archive") ? "" : <Card item={item} />
        )}
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/articles`);
  const data = await res.json();
  return { props: { data } };
}

export default Index;
