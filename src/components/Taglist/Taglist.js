import "@yaireo/tagify/dist/tagify.css"

import styled, { css, keyframes } from 'styled-components';

import React from 'react';
import Tags from "@yaireo/tagify/dist/react.tagify";

const Tag = styled(Tags)`
background: #fff;
margin: 15px 0;
  > span {
    padding-left: 3px;
    color: black;
}
  }
`;

const Taglist = ({tags, onChange}) => {
  return (
    <Tag 
      value={tags}
      onChange={e => onChange(JSON.parse(e.target.value))}
    />  
  );
};

export default Taglist;
