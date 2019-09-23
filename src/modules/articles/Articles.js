import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { push } from 'react-router-redux';
import { debounce } from 'lodash';
import io from "socket.io-client";
import { color } from '../../styles/color';
import { LoadingLogo, Sort } from '../../assets/icon';
import Search from '../../assets/search.svg';


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
  padding: 20px 70px 0 140px;
  transition: all 0.3s;

  ${props => props.sidebarStatus === true && css`
      padding: 20px 70px 0  315px;
  `}

  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`;

const ArticleBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 310px;
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
    transform: scale(1.02);
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
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 0px 12px;
  cursor: pointer;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #5649cf47;
  margin-right: 10px;
  margin-bottom: 10px;
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
  padding: 0px 70px 0px 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const FilterBox = styled.input`
    background-image: url(${Search});
    background-position: 7px 14px;
    background-repeat: no-repeat;
    width: 95%;
    height: 60px;
    margin: 0px 0 35px;
    font-style: italic;
    box-shadow: none;
    border: #eaeaea 1px solid;
    border-left: none;
    border-top: none;
    border-right: none;
    outline: none;
    box-sizing: border-box;
    padding-left: 50px;
    font-size: 1.3em;
    font-weight: 300;
    letter-spacing: 1px;
    transition: all 0.3s;
    ${props => props.sidebarStatus === true && css`
      width: calc(100% - 220px);
      margin-left: 175px;
    `}
`;

const Categoryname = styled.h1`
  font-size: 1.9em;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 20px 0 30px 0;
  text-transform: capitalize;
  padding: 0px 70px 0 140px;
  transition: all 0.3s;
  ${props => props.sidebarStatus === true && css`
      padding: 0px 70px 0  315px;
  `}
`;

class Articles extends Component {
  state = {
    articles: [],
  }
   componentDidMount = () => {
     this.fetch();

     //  const socket = io(`http://localhost:5000?token=${localStorage.getItem('token')}`);
     //  socket.on('article', data => console.log(data));

     const options = {
       rememberUpgrade: true,
       transports: ['websocket'],
       secure: false,
       rejectUnauthorized: false,
     };

     const socket = io('https://tagit-api.herokuapp.com', options);
     socket.on('article', (data) => {
       console.log(data);
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
    console.log(match.params.tag);
    const articles = this.state.articles.map(article => (
      <ArticleBox key={article._id} >
        <div onClick={() => dispatch(push(`${'/article/'}${article._id}`))} style={{ marginBottom: '10px', cursor: 'pointer'}}>
          <ArticleBoxOverlay>
            {/* <div>
              <Fav/>
            </div> */}
            <ArticleImage image={article.image} />
          </ArticleBoxOverlay>
          <ArticleHeader>{article.title}</ArticleHeader>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {article.tags.map(tag => (<ArticleTags onClick={() => dispatch(push(`/articles/${tag}`))} >{tag}</ArticleTags>))}
        </div>
      </ArticleBox>
    ));

    return (
      <>
        {
          match.params.tag && <Categoryname sidebarStatus={sidebarStatus.isOpen}>{match.params.tag}</Categoryname>
        }
        <FilteWrapper>
          <FilterBox
            placeholder="Search"
            sidebarStatus={sidebarStatus.isOpen}
            onChange={e => this.search(e.target.value)}
          />
          <div title="Sort" style={{cursor:'pointer'}}>
          <Sort />
          </div>
        </FilteWrapper>

        <ArticlesGrid sidebarStatus={sidebarStatus.isOpen}>
          {articles}
        </ArticlesGrid>
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
