import Card from "../components/Card";
import { dataRefreshState } from "../util/state";
import { fetcherWithTags } from "../util/helpers";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import useSWR from "swr";

const Category = ({ data }) => {
  const router = useRouter();
  const [dataRefresh, setDataRerfresh] = useRecoilState(dataRefreshState);
  // const { data, error } = useSWR(
  //   ["/api/findByTag", router?.query?.category],
  //   fetcherWithTags
  // );

  const refreshData = () => {
    router.replace(router.asPath);
  };
  
  useEffect(() => {
    refreshData()
    setDataRerfresh(false);
  }, [dataRefresh]);

  return (
    <>
      {data?.length > 0 ? (
        data?.map((item) => <Card item={item} />)
      ) : (
        <div>Nothing here</div>
      )}
    </>
  );
};

export async function getServerSideProps(context) {


  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/findByTag`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tag: context?.query?.category,
    }),
  });

  const data = await res.json();
  return { props: { data } };
}

export default Category;
