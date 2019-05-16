import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
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
import Back from '../../assets/back.svg';

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(8, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  width: 100%;
  position: relative;
  transition: all 0.3s;
  ${props => props.sidebarStatus === true && css`
    grid-template-columns: 250px repeat(8, 1fr);
  `}
`;

const H1 = styled.h1`
  font-size: 3em;
  font-weight: 700;
  padding: 80px 0 10px 0; 
  line-height: 54px;
  grid-column: 4 / 8;
  grid-row: 1 / 1;
  
`;
const BackButton = styled.img`
  grid-area: 1 / 3 / 1 / 3;
  align-self: center;
  justify-self: center;
  position: sticky;
  top: 100px;
  margin-top: 12px;
  cursor: pointer;;
`;

const FeatImg = styled.img`
    grid-area: 3 / 4 / 3 / 8;
    margin-bottom: 30px; 
    width: 100%;
`;

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
    grid-column: 4 / 8;
    grid-row: 2 / 2;
    align-self: center;
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
  grid-column: 4 / 8;
  grid-row: 4;
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
`;

const EditBox = styled.div`
  grid-area: 3 / 8 / 8 / 8;
  position: sticky;
  top: 100px;
  transition: width 0.3s;
  padding-left: 40px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ${props => props.sidebarStatus === true && css`
  `}
`;

const EditItem = styled.div`
  letter-spacing: 1px;
  font-size: 14px;
  color: #5649CF;
  cursor: pointer;
  &:hover {
    &::after {
      position: relative;
      bottom: 4px;
      left: 6px;
      font-size: 0.9em;
      letter-spacing: 2px;
    }
  }
  &::before {
    margin-right: 10px;
    position: relative;
    top: 2px;
    &:hover {
      top: 100px;
    }
  }
  ${props => props.star && css`
  
  &::before {
      content: url(${StarEmpty});
    }
    &:hover {
      &::after {
        content: "Favourite";
      }
    }
  `}
  ${props => props.reminder && css`
    &::before {
        content: url(${ReminderEmpty});
      }
      &:hover {
        &::after {
          content: "Reminder";
        }
      }
  `}
  ${props => props.progress && css`
    &::before {
        content: url(${ProgessEmpty});
      }
      &:hover {
        &::after {
          content: "In progress";
        }
      }
  `}
  ${props => props.archive && css`
    &::before {
      content: url(${Archive});
    }
    &:hover {
      &::after {
        content: "Archive";
      }
    }
  `}
  ${props => props.highlight && css`
    &::before {
      content: url(${Highlight});
    }
    &:hover {
      &::after {
        content: "Highlight";
      }
    }
  `}
  ${props => props.comment && css`
    &::before {
      content: url(${CommentMsg});
    }
    &:hover {
      &::after {
        content: "Comment";
      }
    }
  `}
  ${props => props.members && css`
    &::before {
      content: url(${Members});
    }
    &:hover {
      &::after {
        content: "Members";
      }
    }
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
  grid-area: 5 / 5 / 6 / 7;
  justify-self: center;
  font-size: 0.9em;
  text-decoration: none;
  letter-spacing: 2px;
  line-height: 24px;
  color: rgb(119, 119, 119);
  margin: 20px 0 60px 0;
  font-weight: 100;
`;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      addToFav: false,
      highlight: false,
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
  }

  save = () => {
    const { match, dispatch } = this.props;
    dispatch(actions.updateArticle(match.params.id, this.state.article.content));
    this.setState({ highlight: false });
  }

  back = () => {
    /* eslint-disable */
    history.go(-1)
  }

  render() {
    const { sidebarStatus } = this.props;
    const { article, highlight } = this.state;
    return (
      // <div style={{ display: 'flex', justifyContent: 'center', width: 'calc(100vw - 80px)', position: 'absolute', right:'0' }}>
      <ArticleWrapper sidebarStatus={sidebarStatus.isOpen}>
        {/* <StatBox top>
          <div style={{ fontSize: '0.9em' }}>Tagged: {moment(article.createdAt).format('DD.MM.YYYY')}</div>
          <div style={{ fontSize: '0.9em' }}>{article.tags ? article.tags.length : ''} tags</div>
          <a href={article.url} target="_blank" style={{ fontSize: '0.9em' }}>Source</a>
        </StatBox> */}
        <H1>{article.title}</H1>
        <StatBox bottom>
          <div style={{ fontSize: '0.9em' }}>#{article.tags}</div>
          <div style={{ display: 'flex', fontSize: '0.9em' }}>Reading time: <StatTime> {this.readingTime()} min</StatTime></div>
        </StatBox>
        <BackButton src={Back} onClick={this.back} />
        <FeatImg src={article.image} />
        {!this.state.edit &&
          <ArticleText
            onMouseUp={highlight ? () => this.highlight() : null}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
      }
        <EditBox sidebarStatus={sidebarStatus.isOpen}>
          <EditItem star disabled={highlight} onClick={this.addToFav} />
          <EditItem progress disabled={highlight} />
          <EditItem reminder disabled={highlight} />
          <EditItem archive disabled={highlight} />
          <EditItem />
          {this.state.highlight &&
            <EditItem highlight onClick={this.save} />
          }
          {!this.state.highlight &&
            <EditItem highlight onClick={() => this.setState({ highlight: true })} />
          }
          <EditItem comment disabled={highlight} />
          <EditItem members disabled={highlight} />
        </EditBox>
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
