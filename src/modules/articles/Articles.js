import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { push } from 'react-router-redux';
import { color } from '../../styles/color';
import Search from '../../assets/search.svg';


const ArticlesWrapper = styled.div`
  padding: 3% 70px 5% 140px;
  transition: padding 0.3s;

  ${props => props.sidebarStatus === true && css`
      padding: 3% 70px 5% 315px;
  `}
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

const FilterBox = styled.div`
  display: flex;
  width: 5%;
  justify-content: flex-end;
  align-self: end;
  /* justify-content: space-between; */
  /* border-bottom: 5px solid #eaeaea;
  padding-bottom: 15px;
  margin-bottom: 20px; */
  /* margin-right: 20px; */
`;

// const Filter = styled.input`
//   font-size: 1em;
//   letter-spacing: 0.8px;
//   border-left: none;
//   border-top: none;
//   border-right: none;
//   border-bottom: none;
//   outline: none;
//   &::placeholder {
//     font-weight: 100;
//   }
// `;

// const SearchIcon = styled.span`
//   background: url(${Search});
//   height: 15px;
//   width: 15px;
// `;


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
`;

const ArticleImage = styled.div`
  ${props => props.image && css`
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

// const ArticleExcerp = styled.div`
//   font-weight: 400;
//   font-size: 15px;
//   line-height: 24px;
//   margin-bottom: 15px;
//   color: rgba(0,0,0,.54)!important;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   -webkit-line-clamp: 2;
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   letter-spacing: 1px;
// `;

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
       .get('article', { headers: { Authorization: `Bearer ${token}` } })
       .then((response) => {
         console.log(response.data.articles[5]);
         this.setState({ articles: response.data.articles });
       })
       .catch((error) => {
         console.log(error);
       });
   }

   render() {
     const { dispatch, sidebarStatus } = this.props;
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
       <ArticlesWrapper sidebarStatus={sidebarStatus.isOpen}>
         <Welcome>Welcome back {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</Welcome>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
           <div style={{ display: 'flex' }}>
             <Cats active>Latest</Cats>
             <Cats>Recommended</Cats>
             <Cats>Trending</Cats>
           </div>
           <FilterBox>
             {/* <Filter placeholder="Filter..." /> */}
             {/* <img src={Search} alt="" /> */}
           </FilterBox>
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
  sidebarStatus: PropTypes.shape({
    open: PropTypes.bool,
  }),
};

Articles.defaultProps = {
  sidebarStatus: false,
};

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
    sidebarStatus: state.sidebar,
  };
}

export default connect(mapStateToProps)(Articles);
