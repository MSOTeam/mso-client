import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { push } from 'react-router-redux';
import ProgressBar from 'react-progressbar-on-scroll';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

import * as actions from './actions';
import { EditIcon, Reminder, ReminderChecked, Archive, ArchiveChecked, Fav, FavChecked, InProgress, InProgressChecked } from '../../assets/icon';
import Focus from '../../assets/focus.svg';
import Edit from '../../assets/edit.svg';
import Highlight from '../../assets/highlight.svg';
import CommentMsg from '../../assets/comment.svg';
import Members from '../../assets/members.svg';
import Share from '../../assets/share.svg';
import StarEmpty from '../../assets/star_empty.svg';
import ProgessEmpty from '../../assets/progress_empty.svg';
import Back from '../../assets/back.svg';


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(24, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  width: 100%;
  position: relative;
  padding-top: 40px;
  animation: ${fadeIn} .5s ease-in-out;
  transition: all 0.3s;
  ${props => props.sidebarStatus === true && css`
    grid-template-columns: 250px repeat(12, 1fr);
  `}
`;

const H1 = styled.h1`
  font-size: 2.2em;
  font-weight: 600;
  padding: 10px 0;
  line-height: 42px;
  grid-area: 5 / 10 / 6 / 18;
  letter-spacing: 1px;
  margin-bottom: 10px;
  @media (max-width: 2000px) {
    grid-area: 3 / 9 / 3 / 19;
  }
  @media (max-width: 1280px) {
    grid-area: 3 /4 / 3 / 12;
  }
`;

const BackButton = styled.img`
  grid-area: 1 / 6 / 1 / 12;
  justify-self: center;
  position: sticky;
  top: 84px;
  cursor: pointer;
  height: 25px;
  @media (max-width: 2000px) {
    grid-area: 1 / 6 / 1 / 10;
  }
  @media (max-width: 1280px) {
    grid-area: 1 / 2 / 1 / 4;
  }
`;

const FeatImg = styled.img`
    width: 100%; 
    grid-area: 1 / 10 / 3 / 18;
    margin-bottom: 30px;
    @media (max-width: 2000px) {
      grid-area: 1 / 9 / 3 / 19;
  }
    @media (max-width: 1280px) {
      grid-area: 1 / 4 / 3 / 12;
    }
`;

const StatBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  font-size: 12px;
  letter-spacing: 1px;
  ${props => props.top && css`
    line-height: 24px;
    color: #777777;
    margin-bottom: 10px;
    font-weight: 100;
  `}
  ${props => props.bottom && css`
    grid-column: 10 / 18;
    grid-row: 4 / 5;
    align-self: center;
    line-height: 24px;
    color: #5649CF;
    margin: 15px 0;
  `}
  @media (max-width: 2000px) {
    grid-column: 9 / 20;
  }
  @media (max-width: 1280px) {
    grid-column: 4 / 12;
  }
`;

const StatTime = styled.div`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  ${props => props.tag && css`
    padding: 0px 12px;
    cursor: pointer;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #5649cf47;
    margin-right: 10px;
    cursor: pointer;
  `}
`;

const ArticleText = styled.p`
  font-weight: 300;
  font-size: 1.2em;
  letter-spacing: .5px;
  line-height: 1.58;
  margin-bottom: 25px;
  grid-column: 10 / 18;
  grid-row: 6;
  font-size: 21px;
  @media (max-width: 2000px) {
    grid-column: 9 / 19; 
  }
  @media (max-width: 1280px) {
    grid-column: 4 / 12;
  }
  a  {
    text-decoration: none;
    padding-bottom: 1px;
  }

  img  {
    max-width: 100%;
    margin: 30px auto 20px;
    display: block;
  }

  ol  {
    margin: 30px 0;
  }

  h2, h3 {
    font-size: 1.1em;
    font-weight: 700;
    margin: 35px 0 10px;
  }

  h4, h5{
    font-weight: 600;
    margin: 35px 0 10px;
  }

  span {
  }
  p {
    margin-bottom: 25px;
  }
  iframe {
      width: 100%;
      height: 384px;
    }

    blockquote {
    font-weight: 600;
    padding: 44px 0;
    letter-spacing: 1px;
    font-size: 1.5em;
    line-height: 47px;
  }
  p > img, p + p > span, div > div > section > div > div > div >  div, div > section > div > figure {
    display: none;
  }
`;

const EditBox = styled.div`
  margin-top: 12px;
  grid-area: 5 / 13 / 7 / 24;
  position: sticky;
  top: 100px;
  transition: width 0.3s;
  justify-self: center;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ${props => props.sidebarStatus === true && css`
  `}
  @media (max-width: 2000px) {
    grid-area: 5 / 16 / 7 / 24;
  }
  @media (max-width: 1280px) {
    grid-area: 6 / 12 / 8 / 14;
  }
`;

const EditItem = styled.div`
  letter-spacing: 1px;
  font-size: 14px;
  color: #5649CF;
  &:hover {
    cursor: pointer;
  }
  background-image: url(${props => props.src || ""}); 

  /* &:hover {
    &::after {
      position: relative;
      bottom: 4px;
      left: 6px;
      font-size: 0.9em;
      letter-spacing: 2px;
    }
  }
  &::before {
    position: relative;
    top: 2px;
  } */
  ${props => props.bg && css`
    &::before {
      background: #000;
    }
  `}

  ${props => props.star && css`

  &::before {
      content: url(${StarEmpty});
    }
    /* &:hover {
      &::after {
        content: "Favourite";
      }
    } */
  `}
  ${props => props.progress && css`
    &::before {
        content: url(${ProgessEmpty});
      }
      /* &:hover {
        &::after {
          content: "In progress";
        }
      } */
  `}
  ${props => props.highlight && css`
    &::before {
      content: url(${Highlight});
    }
    /* &:hover {
      &::after {
        content: "Highlight";
      }
    } */
  `}
  ${props => props.comment && css`
    &::before {
      content: url(${CommentMsg});
    }
    /* &:hover {
      &::after {
        content: "Comment";
      }
    } */
  `}
  ${props => props.members && css`
    &::before {
      content: url(${Members});
    }
    /* &:hover {
      &::after {
        content: "Members";
      }
    } */
  `}

  ${props => props.disabled === true && css`
    opacity: 0.5;
    cursor: default;
  `}

  ${props => props.focus && css`
    &::before {
      content: url(${Focus});
    }
  `}
  ${props => props.edit && css`
    &::before {
      content: url(${Edit});
    }
  `}
  ${props => props.share && css`
    &::before {
      content: url(${Share});
    }
  `}
`;

const Source = styled.a`
  grid-area: 7 / 21 / 7 / 7;
  justify-self: center;
  font-size: 0.9em;
  text-decoration: none;
  letter-spacing: 2px;
  line-height: 24px;
  color: rgb(119, 119, 119);
  margin: 20px 0 60px 0;
  font-weight: 100;
`;

const Tags = styled.div`
`;

const AddTag = styled.div`
  font-weight: 500;
`;

const TagWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  &:hover {
      div:nth-child(2) {
        display: block;
      }
    }
`;


const EditTag = styled.div`
  position: absolute;
  right: 2px;
  bottom: 10px;
  display: none;
  cursor: pointer;
  &:hover {
      + div {
        display: block;
      }
    }
`;

const EditMenu = styled.div`
  position: absolute;
  right: -64px;
  bottom: -35px;
  background: black;
  z-index: 1000;
  display: none;
  border-radius: 3px;
`;


const EditPop = styled.span`
  color: white;
  padding: 0 10px;
  font-weight: 400;
  font-size: 1.1em;
`;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      addToFav: false,
      highlight: false,
      article: { title: null, content: null, tags: [] },
    };
  }

  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(actions.findArticle(match.params.id));
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.article !== prevProps.article) {
      this.setState({ article: this.props.article });
    }
  }

  readingTime = () => {
    const { article } = this.state;
    const minutes = article.length / 2;
    const avgTime = minutes / 50;
    const displayed = Math.ceil(avgTime.toFixed(2));
    return displayed;
  };

  highlight = () => {
    const selection = document.getSelection();
    const range = selection.getRangeAt(0);
    const clonedSelection = range.cloneContents();

    const div = document.createElement('div');
    div.appendChild(clonedSelection);

    let html = div.innerHTML;

    if (html.startsWith('<')) {
      const index = html.indexOf('>');
      html = html.slice(index + 1, html.length);
    }

    if (html.endsWith('>')) {
      const index = html.lastIndexOf('<');
      html = html.slice(0, index);
    }

    const element = document.getElementById('articleContent');
    const currenthtml = element.innerHTML;
    const { article } = this.state;

    let markedHtml = '';

    for (let i = 0; i < html.length; i++) {
      if (html[i] === '<') {
        markedHtml += '</mark><';
      } else if (html[i] === '>') {
        markedHtml += '><mark>';
      } else {
        markedHtml += html[i];
      }
    }

    markedHtml = `<mark>${markedHtml}</mark>`;

    const content = currenthtml.replace(html, markedHtml);
    article.content = content;

    this.setState({ article });
  }

  comment = () => {

  }

  edit = () => {
    const { highlight, comment } = this.state;
    if (highlight) {
      this.highlight();
    } else if (comment) {
      this.comment();
    }
  }

  save = () => {
    const { match, dispatch } = this.props;
    const { article } = this.state;

    dispatch(actions.updateArticle(match.params.id, article));
    this.setState({
      highlight: false,
      comment: false,
      edit: false,
    });
  }

  back = () => {
    /* eslint-disable */
    history.go(-1)
  }

  toggleTag = (tag) => {
    const { match, dispatch } = this.props;
    const { article } = this.state;

    const index = article.tags.indexOf(tag);
    if(index === -1) {
      article.tags.push(tag);
    } else {
      article.tags.splice(index, 1);
    }

    dispatch(actions.updateArticle(match.params.id, article ));

    this.setState({ article })

  }

  render() {
    const { sidebarStatus, dispatch } = this.props;
    const { article, highlight, comment, edit } = this.state;

    const tags = article.tags.map((item) =>
     <TagWrapper>
      <StatTime tag onClick={() => dispatch(push(`/articles/${item}`))}>{item}</StatTime>
      <EditTag>
        <EditIcon/>
      </EditTag>
      <EditMenu>
        <div style={{display: 'flex', flexDirection: 'column', padding: '6px'}}>
        <EditPop>Rename</EditPop>
        <EditPop>Delete</EditPop>
        </div>
      </EditMenu>
    </TagWrapper>
    );


    return (
      <ArticleWrapper sidebarStatus={sidebarStatus.isOpen}>
        <ProgressBar
          color="#21C1C4"
          height={6}
          direction="right"
          position="top"
        />
        <H1>{article.title}</H1>
        <StatBox bottom>
          <Tags style={{display: 'flex', flexWrap: 'wrap'}}>{tags} <AddTag>+</AddTag></Tags>
        </StatBox>
        <BackButton src={Back} onClick={this.back} />
        <FeatImg src={article.image} />
        <ArticleText
          onMouseUp={this.edit}
          dangerouslySetInnerHTML={{ __html: article.content }}
          id="articleContent"
        />
        <EditBox sidebarStatus={sidebarStatus.isOpen}>
          <EditItem
            disabled={highlight || comment}
            bg={article.tags.indexOf('favorites') > -1}
            onClick={() => this.toggleTag('favorites')}
          >
          {
            article.tags.indexOf('favorites') > -1 ? (
              <FavChecked />
            ) : (
              <Fav />
            )
          }
          </EditItem>

          <EditItem
            bg={article.tags.indexOf('inprogress') > -1}
            disabled={highlight || comment}
            onClick={() => this.toggleTag('inprogress')}
          >
          {
            article.tags.indexOf('inprogress') > -1 ? (
              <InProgressChecked />
            ) : (
              <InProgress />
            )
          }
          </EditItem>

          <EditItem             
            bg={article.tags.indexOf('reminder') > -1}
            disabled={highlight || comment}
            onClick={() => this.toggleTag('reminder')}>
            {
              article.tags.indexOf('reminder') > -1 ? (
                <ReminderChecked />
              ) : (
                <Reminder />
              )
            }
          </EditItem>
       
          <EditItem
            bg={article.tags.indexOf('archive') > -1}
            disabled={highlight || comment}
            onClick={() => this.toggleTag('archive')}
            >
            {
              article.tags.indexOf('archive') > -1 ? (
                <ArchiveChecked />
              ) : (
                <Archive />
              )
            }
          </EditItem>
          <EditItem />



          {/* {highlight &&
            <EditItem highlight onClick={this.save} />
          }
          {!highlight &&
            <EditItem highlight disabled={comment} onClick={() => this.setState({ highlight: true })} />
          }
          {comment &&
            <EditItem comment onClick={this.save} />
          }
          {!comment &&
            <EditItem comment disabled={highlight} onClick={() => this.setState({ comment: true })} />
          }
          <EditItem members disabled={highlight || comment} /> */}


        </EditBox>
        {/* this.state.edit &&
          <textarea style={{ width: '100%', height: 400 }}>
            {article.content}
          </textarea>
        */}
        {/* {this.state.edit &&
          <div style={{ border: '1px solid gray', minHeight: 300 }}>
            <Editor
              value={article.content}
            />
          </div>
        } */}
        <Source href={article.url} target="_blank">Source</Source>
      </ArticleWrapper>
      // </div>
    );
  }
}

Article.propTypes = {
  dispatch: PropTypes.func.isRequired,
  article: PropTypes.object,
  sidebarStatus: PropTypes.bool.isRequired,
};

Article.defaultProps = {
  article: { title: null, content: null },
};

function mapStateToProps(state) {
  return {
    article: state.articles.article,
    sidebarStatus: state.sidebar,
  };
}

export default connect(mapStateToProps)(Article);
