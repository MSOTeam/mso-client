import { useRouter } from 'next/router'
import { useRecoilState } from "recoil";
import { tokenId } from "../util/state";
import { fetcher } from '../util/helpers'
import useSWR from 'swr'
import Card from '../components/Card'
const Category = () => {
  const router = useRouter()
  const [token,] = useRecoilState(tokenId);
  const url = `http://localhost:5000/article/?tag=${router.asPath.replace(/^\/|\/$/g, '')}`;
  const { data, error } = useSWR([url, token], fetcher);

  return (
    data?.articles?.length >= 1 && data?.articles?.map((item) => (
      <Card item={item} />
    )))
}

export default Category