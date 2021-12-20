import Card from "../components/Card";
import { MyLoader } from "../util/icon";
import { fetcher } from "../util/helpers";
import useSWR from "swr";

const Index = () => {
  const placeholder = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const { data, error } = useSWR(['/api/articles'], fetcher);
  console.log(data)
  return !data ? (
    <>
      {placeholder?.map(() => (
        <MyLoader />
      ))}
    </>
  ) : (
    <>
      {data?.length > 0 &&
        data?.map((item) => <Card item={item} />)}
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/articles`);
  const content = await res.json();
  return { props: { content } };
}

export default Index;
