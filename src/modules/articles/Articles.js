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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  padding: 20px 70px 0 140px;
  transition: all 0.3s;

  ${props => props.sidebarStatus === true && css`
      padding: 20px 70px 0  315px;
  `}

  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
  @media (max-width: 2600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
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
  margin-right: 10px;
`;

class Articles extends Component {
  state = {
    articles: [],
  }
   componentDidMount = () => {
     this.fetch();
   }

   componentDidUpdate = (prevProps, prevState) => {    
     const { match } = this.props;

     if (match.params.tag !== prevProps.match.params.tag) {
       this.fetch();
     }
   }

  fetch = () => {
    const { match } = this.props;

    const url = `article/?tag=${match.params.tag}`;

    const token = localStorage.getItem('token');
    axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        this.setState({ articles: response.data.articles });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    const { dispatch, sidebarStatus } = this.props;
    const articles = this.state.articles.map(article => (
      <ArticleBox key={article._id} onClick={() => dispatch(push(`${'/article/'}${article._id}`))}>
        <div>
          <ArticleBoxOverlay>
            <ArticleImage image={article.image} />
          </ArticleBoxOverlay>
          <ArticleHeader>{article.title}</ArticleHeader>
        </div>
        {/* <ArticleExcerp dangerouslySetInnerHTML={{ __html: article.excerpt }} /> */}
        {/* <div>Length: {article.length}</div> */}
        <div style={{ display: 'flex' }}>
          {article.tags.map(tag => (<ArticleTags>#{tag}</ArticleTags>))}
        </div>
      </ArticleBox>
    ));

    return (
      <ArticlesGrid sidebarStatus={sidebarStatus.isOpen}>
        {articles}
      </ArticlesGrid>
    );
  }
}

Articles.defaultProps = {
  sidebarStatus: false,
  match: {
    params: {
      tag: '',
    },
  },
};

Articles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sidebarStatus: PropTypes.shape({
    open: PropTypes.bool,
  }),
  match: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
    sidebarStatus: state.sidebar,
  };
}

export default connect(mapStateToProps)(Articles);
