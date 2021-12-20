import Card from "../components/Card";
import axios from "axios";
import { fetcherWithTags } from "../util/helpers";
import { useRouter } from "next/router";
import useSWR from "swr";

const Category = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    ["/api/findByTag", router?.query?.category],
    fetcherWithTags
  );
  return <>{data?.length >= 1 && data?.map((item) => <Card item={item} />)}</>;
};

export default Category;
