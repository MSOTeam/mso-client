import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import { push } from 'react-router-redux';
import * as actions from './actions';
import { color } from '../../styles/color';
import Search from '../../assets/search.svg';

const ArticlesWrapper = styled.div`
  padding: 3% 70px 5% 140px;
  
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  margin-top: 3%;
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
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

const Welcome = styled.h1`
  font-size: 1.4em;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 20px 0 30px 0;
`;

const Cats = styled.p`
  font-size: 1em;
  letter-spacing: 0.5px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  margin-right: 20px;
  ${props => props.active && css`
    font-weight: 600;
    border-bottom: 5px solid ${color.primary};
    width: fit-content;
  `}
`;

const Filter = styled.input`
  width: 20%;
  font-size: 1em;
  letter-spacing: 0.8px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  margin-right: 20px;
  border-bottom: 5px solid #eaeaea;
  border-left: none;
  border-top: none;
  border-right: none;
  outline: none;
  &::placeholder {
    font-weight: 100;
  }
  &::after {
      content: url(${Search});
  
    }
`;

const ArticleBox = styled.div`
  display: grid;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ArticleImage = styled.div`
  background: ${color.dark};
  height: 200px;
  margin-bottom: 15px;
`;

const ArticleHeader = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

const ArticleExcerp = styled.div`
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

const ArticleTags = styled.span`
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  line-height: 24px;
  color: ${color.primary};
  align-self: end;
  letter-spacing: 1px;
`;

class Articles extends Component {
   componentDidMount = () => {
     const { dispatch } = this.props;
     dispatch(actions.findArticles());
   }

   render() {
     const { dispatch } = this.props;
     console.log(this.props.articles);

     const articles = this.props.articles.map(article => (
       <ArticleBox onClick={() => dispatch(push(`${'/article/'}${article._id}`))}>
         <ArticleImage />
         <ArticleHeader>{article.title}</ArticleHeader>
         <ArticleExcerp dangerouslySetInnerHTML={{ __html: article.excerpt }} />
         {/* <div>Length: {article.length}</div> */}
         {article.tags.map(tag => (<ArticleTags>#{tag}</ArticleTags>))}
       </ArticleBox>
     ));

     return (
       <ArticlesWrapper>
         <Welcome>Welcome back {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</Welcome>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
           <div style={{ display: 'flex' }}>
             <Cats active>Latest</Cats>
             <Cats>Recommended</Cats>
             <Cats>Trending</Cats>
           </div>
           <Filter placeholder="Search..." />
         </div>
         <ArticlesGrid>
           {articles}
         </ArticlesGrid>
       </ArticlesWrapper>
     );
   }
}

Articles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  articles: PropTypes.array,
};

Articles.defaultProps = {
  articles: [],
};

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
  };
}

export default connect(mapStateToProps)(Articles);
