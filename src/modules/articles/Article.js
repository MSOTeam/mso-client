import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
import moment from 'moment';
import { Editor } from '../../components';
import * as actions from './actions';
import Focus from '../../assets/focus.svg';
import Edit from '../../assets/edit.svg';
import Highlight from '../../assets/highlight.svg';
import CommentMsg from '../../assets/comment.svg';
import Members from '../../assets/members.svg';
import Share from '../../assets/share.svg';
import Archive from '../../assets/archive.svg';
import StarEmpty from '../../assets/star_empty.svg';
import ProgessEmpty from '../../assets/progress_empty.svg';
import ReminderEmpty from '../../assets/reminder_empty.svg';

import PStar from '../../assets/star.svg';
import PReminder from '../../assets/reminder.svg';
import PProgress from '../../assets/progress.svg';

const StatBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  font-size: 14px;
  letter-spacing: 1px;
  ${props => props.top && css`
    line-height: 24px;
    color: #777777;
    margin-bottom: 10px;
    font-weight: 100;
  `}
  ${props => props.bottom && css`
    cursor: pointer;
    line-height: 24px;
    color: #5649CF;
    margin-bottom: 30px;
  `}
`;

const StatTime = styled.div`
  font-weight: 700;
  margin-left: 6px;
`;

const ArticleText = styled.p`
  font-weight: 300;
  font-size: 1.2em;
  line-height: 35px;
  margin-bottom: 25px;
  text-align: justify;

  a  {
    color: black;
    text-decoration: none;
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

  & > div > div  {
    overflow: hidden;
  }

  & > div > div > div > * {
    padding: 20px 0;
    line-height: 38px;
  }
  & > div > div > div > p > a {
    color: #000;
  }
  & > div > div > figure {
    margin-bottom: 50px;
  }

  & > div > div > figure > figcaption > * {
    font-weight: 600;
    font-size: 14px;
    color: #777777;
    font-weight: 100;
  }

  & > div > div > figure > span > img {
    background-size: cover;
    width: 100%;
    height: auto;
  }

  & > div > div > article > div > div > div > div > pre {
    margin: 16px 0;
    background: grey;
    padding: 11px;
  }

  & > div > div > article > div > div > div > div > pre > * {
    font-family: 'Cousine', monospace !important;
  }
  & > div > div > center {
    margin: 50px;
    font-size: 1em;
  }
  & > div > article {
    display: none;
  }
  & > p {
    line-height: 38px;
  }

  & > div > div > h2 {
    font-size: 1em;
    font-weight: bold;
    margin: 25px 0 10px 0;
    
  }
`;

const EditBox = styled.div`
  position: sticky;
  /* width: calc(100vw - 80px);
  background:#fff; 
  box-shadow: #000 0px -8px 10px -13px;
  bottom: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: center;
  z-index: 1; */
  z-index: 10000;
  float: right;
  top: 150px;
  transition: 0.3s;
  margin-top: 200px;
  padding-left: 50px;
  height: 322px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props => props.sidebarStatus === true && css`
    width: calc(100vw - 250px);
  `}
`;

const EditWrapper = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1400px) {
    /* width: 60%; */
  }
`;

const EditItem = styled.div`
  letter-spacing: 1px;
  font-size: 14px;
  color: #5649CF;
  ${props => props.focus && css`
    &::before {
      content: url(${Focus});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  ${props => props.edit && css`
    &::before {
      content: url(${Edit});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  ${props => props.highlight && css`
    &::before {
      content: url(${Highlight});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  ${props => props.comment && css`
    &::before {
      content: url(${CommentMsg});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  ${props => props.members && css`
    &::before {
      content: url(${Members});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  ${props => props.share && css`
    &::before {
      content: url(${Share});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  ${props => props.archive && css`
    &::before {
      content: url(${Archive});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  cursor: pointer;
  ${props => props.star && css`
      content: url(${PStar});
  `}
  ${props => props.progress && css`
      content: url(${PProgress});
  `}
  ${props => props.reminder && css`
      content: url(${PReminder});
  `}
`;

const AddBox = styled.div`
    display: flex;
    height: 20vh;
    flex-direction: column;
    position: absolute;
    right: -100px;
    top: 200px;
`;

const AddItem = styled.div`
  cursor: pointer;
  ${props => props.star && css`
      content: url(${StarEmpty});
      margin-bottom: 30px;
  `}
  ${props => props.progress && css`
      content: url(${ProgessEmpty});
      margin-bottom: 30px;
  `}
  ${props => props.reminder && css`
      content: url(${ReminderEmpty});
      margin-bottom: 30px;
  `}
`;

const ArticleWrapper = styled.div`
  max-width: 780px;
  padding: 3% 0 7% 0;
  position: relative;
  display: flex;
  flex-direction: row-reverse
  /* transform: translateZ(0); */
  transition: padding 0.3s;
  ${props => props.sidebarStatus === true && css`
    padding: 3% 70px 7% 315px;
  `}
`;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      addToFav: false,
      highlight: false,
      highlight: '',
      article: { title: null, content: null },
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

  addToFav = () => {
    console.log(this.state.addToFav);
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

    // this.setState({ highlight: html });
    // this.setState({ highlight: document.getSelection().toString() });
  }

  setHighlight = () => {
    const { article, highlight } = this.state;

    const element = document.getElementById('articleContent');
    const currenthtml = element.innerHTML;

    const content = currenthtml.replace(highlight, `<mark>${highlight}</mark>`);
    article.content = content;

    this.setState({ article });
  }

  render() {
    const { sidebarStatus } = this.props;
    const { article } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', width: 'calc(100vw - 80px)', position: 'absolute', right:'0' }}>
        <ArticleWrapper sidebarStatus={sidebarStatus.isOpen}>
          <EditBox sidebarStatus={sidebarStatus.isOpen}>                        
            <EditItem star onClick={this.addToFav} />
            <EditItem progress />
            <EditItem reminder />
            <EditItem archive />
            <EditItem />
            <EditItem />
            {this.state.highlight &&
              <EditItem onClick={() => this.setState({ highlight: false })}>Save</EditItem>
            }
            {!this.state.highlight &&
              <EditItem highlight onClick={() => this.setState({ highlight: true })} />
            }
            <EditItem comment />
            <EditItem members />
          </EditBox>
          {/* <StatBox top>
            <div style={{ fontSize: '0.9em' }}>Tagged: {moment(article.createdAt).format('DD.MM.YYYY')}</div>
            <div style={{ fontSize: '0.9em' }}>{article.tags ? article.tags.length : ''} tags</div>
            <a href={article.url} target="_blank" style={{ fontSize: '0.9em' }}>Source</a>
          </StatBox> */}
          <div style={{ display: '700px'}}>
          <h1 style={{
            fontSize: '3em', fontWeight: 700, paddingBottom: 10, lineHeight: '54px',
            }}
          >{article.title}
          </h1>
          <StatBox bottom>
            <div style={{ fontSize: '0.9em' }}>#{article.tags}</div>
            <div style={{ display: 'flex', fontSize: '0.9em' }}>Reading time: <StatTime> {this.readingTime()} min</StatTime></div>
          </StatBox>
          <img style={{marginBottom: '30px', width: '100%' }} src={article.image} />
          {!this.state.edit &&
            <div id="articleContent">
              <ArticleText
                onMouseUp={this.state.highlight ? () => this.highlight() : null}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          }
          {/* this.state.edit &&
            <textarea style={{ width: '100%', height: 400 }}>
              {article.content}
            </textarea>
          */}
          {this.state.edit &&
            <div style={{ border: '1px solid gray', minHeight: 300 }}>
              <Editor
                value={article.content}
              />
            </div>
          }
          <a style={{ fontSize: '0.9em', textDecoration: 'none', lineHeight: '24px', color: '#777777', marginBottom: '10px', fontWeight: '100' }} href={article.url} target="_blank">Source</a>
          </div>
        </ArticleWrapper>
        {/* <AddBox>
          <AddItem star onClick={this.addToFav} />
          <AddItem progress />
          <AddItem reminder />
        </AddBox> */}
        {/* <EditBox sidebarStatus={sidebarStatus.isOpen}>
          <EditItem focus>Focus</EditItem>
          <EditItem edit onClick={() => this.setState({ edit: !this.state.edit })}>Edit</EditItem>
          {this.state.highlight &&
            <EditItem onClick={() => this.setState({ highlight: false })}>Save</EditItem>
          }
          {!this.state.highlight &&
            <EditItem highlight onClick={() => this.setState({ highlight: true })}></EditItem>
          }
          <EditItem comment></EditItem>
          <EditItem members></EditItem>
          <EditItem share>Share</EditItem>
          <EditItem archive></EditItem>
          <EditItem star onClick={this.addToFav} />
          <EditItem progress></EditItem>
          <EditItem reminder></EditItem>
        </EditBox> */}
 
      </div>
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
