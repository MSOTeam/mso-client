import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css" 


const Tag = styled(Tags)`
background: #fff;
margin: 15px 0;
  > span {
    padding-left: 0px;
  }
`;

const Taglist = ({tags}) => {

  console.log(tags);
  return (
    <Tag 
      value={tags}
    />  
  );
};

export default Taglist;
