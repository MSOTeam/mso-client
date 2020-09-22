import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { push } from 'react-router-redux';
import { debounce } from 'lodash';
import io from "socket.io-client";
import Skeleton from 'react-loading-skeleton';
import Search from '../../assets/search.svg';
import { FavSmall, FavSmallChecked, AddTo } from '../../assets/icon';


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
  grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
  grid-gap: 2em;
  padding: 20px 30px 0 80px;
  transition: all 0.3s;
  margin-bottom: 30px;

  ${props => props.sidebarStatus === true && css`
      padding: 20px 30px 0  280px;
  `}
  ${props => props.category && css`
    margin-bottom: 15px;
  `}


  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`;

const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 150px;
  box-shadow: 0 2px 40px 0 rgba(0,0,0,0.07);
  border-radius: 8px;
  overflow: hidden;
  transition: all .5s;
  position: relative;
  transition: box-shadow .3s ease-out, transform .3s ease-out;
  transform: translateZ(0);
  &:hover {
    box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
    transform: translate(0, -4px);
  }
`;

const ArticleBoxOverlay = styled.div`
  overflow: hidden;
  height: 200px;
  margin-bottom: 10px;
  background: #FAFAFA;
  position: relative;
`;

const ArticleImage = styled.div`
  ${props => props.image && css`
    animation: ${fadeIn} .2s ease-in-out;
    background: url(${props.image}) no-repeat center center;
  `}
  height: 100%;
  width: 100%;
  background-size: cover;
  transition: transform .1s linear;

  &:hover {
    /* transform: scale(1.02); */
  }
`;

const ArticleHeader = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  letter-spacing: 1px;
  box-sizing: border-box;
  padding: 0 20px;
`;

const ArticleTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 20px 10px;
`;

const ArticleTags = styled.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
  line-height: 24px;
  color: #5649CF;
`;

const CatName = styled.h1`
  font-size: 1.9em;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 20px 0 30px 0;
`;

const FilteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column-end: -1;
  transition: all 0.3s;
`;


const FilterBox = styled.input`
    background-image: url(${Search});
    background-position: -6px -6px;
    background-repeat: no-repeat;
    width: 100%;
    height: 30px;
    box-shadow: none;
    border: #eaeaea 1px solid;
    border-left: none;
    border-top: none;
    border-right: none;
    outline: none;
    box-sizing: border-box;
    padding-left: 35px;
    padding-bottom: 9px;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 1px;
`;

const Categoryname = styled.h1`
  font-size: 1.3em;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Options = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const OptionItem = styled.div`
  background: white;
  padding: 8px 7px;
  margin-left: 5px;
  line-height: 0;
  border-radius: 20px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  ${props => props.checked && css`
    background: #6563FF;
  `}
`;

class Articles extends Component {
  state = {
    articles: [],
    sk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    addToFav: false,
  }
   componentDidMount = () => {
     this.fetch();
     const options = {
       rememberUpgrade: true,
       transports: ['websocket'],
       secure: false,
       rejectUnauthorized: false,
     };

     const socket = io('http://localhost:5000', options);
     socket.on('article', (data) => {
       this.fetch();
     });
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

  search = debounce((value) => {
    const { match } = this.props;
    let text = '';
    if (value.length > 3) {
      text = value;
    }
    const url = `article/?tag=${match.params.tag}&text=${text}`;
    const token = localStorage.getItem('token');

    axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        this.setState({ articles: response.data.articles });
      })
      .catch((error) => {
        console.log(error);
      });
  }, 300);


  render() {
    const { dispatch, sidebarStatus, match } = this.props;
    console.log(this.state.articles);
    const articles = this.state.articles.map(article => (
      <ArticleBox key={article._id} >
        {/* <div onClick={() => dispatch(push(`${'/article/'}${article._id}`))} style={{ marginBottom: '10px', cursor: 'pointer'}}> */}
        <Options>
          { article.tags.includes('favorites') ? (
            <OptionItem checked onClick={() => alert('removed')}>
              <FavSmallChecked />
            </OptionItem>
          ) : (
            <OptionItem onClick={() => alert('added')}>
              <FavSmall />
            </OptionItem>
          )}
         
          <OptionItem><AddTo /></OptionItem>
        </Options>
        <a style={{ color: 'black', textDecoration: 'none' }} href={article.url} target="_blank" rel="noopener noreferrer">
          <ArticleBoxOverlay>
            {
            article.image !== '' ? (
              <ArticleImage image={article.image} />
              ) : (
                <img style={{ width: '100%' }} alt={article.title} src="https://generative-placeholders.glitch.me/image?width=350&height=350&style=tiles" />
              )
            }
          </ArticleBoxOverlay>
          <ArticleHeader>{article.title}</ArticleHeader>
        </a>
        {/* </div> */}
        <ArticleTagsWrapper>
          {article.tags.map(tag => (<ArticleTags onClick={() => dispatch(push(`/articles/${tag}`))} >#{tag}</ArticleTags>))} 
        </ArticleTagsWrapper>
      </ArticleBox>
    ));

    const Skele = this.state.sk.map(article => (
      <ArticleBox key={article._id} >
        <ArticleBoxOverlay>
          <ArticleImage>
            <Skeleton height={200} />
          </ArticleImage>
        </ArticleBoxOverlay>
        <ArticleHeader><Skeleton count={2} /></ArticleHeader>
        <ArticleTagsWrapper>
          <ArticleTags><Skeleton style={{float: 'left'}} width={50}/></ArticleTags>
        </ArticleTagsWrapper>
      </ArticleBox>
    ));

    return (
      <>
        <ArticlesGrid sidebarStatus={sidebarStatus.isOpen} category>
          {
            match.params.tag ? (
              <Categoryname sidebarStatus={sidebarStatus.isOpen}>{match.params.tag}</Categoryname>
            ): (
              <Categoryname sidebarStatus={sidebarStatus.isOpen}>Latest tags</Categoryname>
            )
          }
          <FilteWrapper sidebarStatus={sidebarStatus.isOpen}>
            <FilterBox
              placeholder="Search"
              onChange={e => this.search(e.target.value)}
            />
          </FilteWrapper>
        </ArticlesGrid>
        <>
          { articles.length ? (
            <ArticlesGrid sidebarStatus={sidebarStatus.isOpen}>
              {articles}
            </ArticlesGrid>
          ) : (
            <ArticlesGrid sidebarStatus={sidebarStatus.isOpen}>
              {Skele}
            </ArticlesGrid>
          )}
        </>
      </>
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
