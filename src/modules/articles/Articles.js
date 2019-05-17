import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { push } from 'react-router-redux';
import { color } from '../../styles/color';
import { LoadingLogo } from '../../assets/icon';


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  margin-top: 3%;
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
  @media (max-width: 2600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleBox = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transition: all .2s ease-in-out;
   > div > img {
    transform: scale(1.05);
    }
    
  }
`;

const ArticleBoxOverlay = styled.div`
  overflow: hidden;
  height: 200px; 
  margin-bottom: 10px;
  background: #FAFAFA;
`;

const ArticleImage = styled.div`
  ${props => props.image && css`
    animation: ${fadeIn} .2s ease-in-out;
    background: url(${props.image}) no-repeat center center;
  `}
  height: 100%;
  width: 100%;
  background-size: cover;
`;

const ArticleHeader = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  letter-spacing: 1px;
  box-sizing: border-box;
`;


const ArticleTags = styled.div`
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  line-height: 24px;
  color: ${color.primary};
  align-self: end;
  letter-spacing: 1px;
  box-sizing: border-box;
`;

class Articles extends Component {
  state = {
    articles: [],
  }
   componentDidMount = () => {
     const token = localStorage.getItem('token');
     axios
       .get('article?tag=hello', { headers: { Authorization: `Bearer ${token}` } })
       .then((response) => {
         console.log(response.data.articles[5]);
         this.setState({ articles: response.data.articles });
       })
       .catch((error) => {
         console.log(error);
       });
   }

   render() {
     const { dispatch } = this.props;
     const articles = this.state.articles.map(article => (
       <ArticleBox onClick={() => dispatch(push(`${'/article/'}${article._id}`))}>
         <div>
           <ArticleBoxOverlay>
             <ArticleImage image={article.image} />
           </ArticleBoxOverlay>
           <ArticleHeader>{article.title}</ArticleHeader>
         </div>
         {/* <ArticleExcerp dangerouslySetInnerHTML={{ __html: article.excerpt }} /> */}
         {/* <div>Length: {article.length}</div> */}
         {article.tags.map(tag => (<ArticleTags>#{tag}</ArticleTags>))}
       </ArticleBox>
     ));

     return (
       <ArticlesGrid>
         {articles}
       </ArticlesGrid>
     );
   }
}

Articles.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
  };
}

export default connect(mapStateToProps)(Articles);
