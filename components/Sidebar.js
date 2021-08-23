import { useEffect, useState } from 'react';

import axios from "axios";
import { fetcher } from '../util/helpers'
import useSWR from 'swr'

const Sidebar = ({ posts }) => {
  const [token, setToken] = useState(0);

  // const { data, error } = useSWR(
  //   [`http://localhost:5000/tag`, token],
  //   fetcher
  // );
  // if (error) console.log(error);
  // if (data) console.log(data);

  useEffect(() => {
    // setToken(localStorage.getItem("token"))

    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/tag", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        const { tags } = response.data;
        console.log(tags)
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  return (
    <>
      Sidevar
    </>
  );
};

// export async function getServerSideProps() {
//   const posts = await fetcher('http://localhost:5000/')
//   return { props: { posts } }
// }

// export const getServerSideProps = async (context) => {
//   const hero = await graphQlClient.request(HERO_IMAGES, {
//     tag: "frontpage",
//   });

//   const services = await graphQlClient.request(SERVICE_TYPES);

//   return {
//     props: { hero, services },
//   };
// };



export default Sidebar;
