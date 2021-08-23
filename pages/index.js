
import useSWR from 'swr'
import { fetcher} from '../util/helpers'

const Index = ({ posts }) => {
  const { data } = useSWR('/api/posts', fetcher, { initialData: posts })
  console.log(data)
  return (
    <>
      hello
    </>
  );
};

export async function getServerSideProps() {
  const posts = await fetcher('https://jsonplaceholder.typicode.com/posts')
  return { props: { posts } }
}

// export const getServerSideProps = async (context) => {
//   const hero = await graphQlClient.request(HERO_IMAGES, {
//     tag: "frontpage",
//   });

//   const services = await graphQlClient.request(SERVICE_TYPES);

//   return {
//     props: { hero, services },
//   };
// };



export default Index;
