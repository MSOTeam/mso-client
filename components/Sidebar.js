import { useEffect, useState } from 'react';

import axios from "axios";
import { fetcher } from '../util/helpers'
import styled from 'styled-components';
import useSWR from 'swr'

const SidebarItem = styled.div`
  font-size: 0.9em;
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  width: 90%;
  ${(props) =>
    props.bread &&
    css`
      font-weight: 100;
    `}
  ${(props) =>
    props.edit &&
    css`
      display: none;
      width: 10%;
    `}
`;

const Sidebar = ( ) => {
  const [tags, setTags] = useState(0);

  const [parameters, setParameters] = useState({
    revalidateOnFocus: false,
    revalidateOnMount:false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
  });

    const { data, error, isValidating, mutate  } = useSWR(
    [`http://localhost:5000/tag`, localStorage?.getItem("token")],
    fetcher, parameters
  );
  if (error) console.log(error);
  if (data) console.log(data);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    axios
      .get("http://localhost:5000/tag", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        const { tags } = response?.data;
        setTags(tags)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(tags)
  return (
    <div style={{display: 'flex', flexDirection:"column"}}>
        {tags?.length > 1 && tags?.map((item) => (
          <span>{item?.tag}</span>
        ))}
    </div>
  );
};

// export async function getServerSideProps() {
//   const tags = await fetcher('http://localhost:5000/tag', localStorage.getItem("token"))
//   return { props: { t } }
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
