import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
import moment from 'moment';
import * as actions from './actions';
import Edit from '../../assets/edit.svg';
import Highlight from '../../assets/highlight.svg';
import CommentMsg from '../../assets/comment.svg';
import Members from '../../assets/members.svg';
import Share from '../../assets/share.svg';
import Archive from '../../assets/archive.svg';

const StatBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
  ${props => props.top && css`
    line-height: 24px;
    color: #777777;
    margin-bottom: 17px;
    font-weight: 100;
  `}
  ${props => props.bottom && css`
    cursor: pointer;
    line-height: 24px;
    color: #5649CF;
    margin-bottom: 20px;
  `}
`;

const StatTime = styled.div`
  font-weight: 700;
  margin-left: 6px;
`;

const ArticleText = styled.p`
  font-weight: 500;
  font-size: 19px;
  line-height: 31px;
  margin-bottom: 50px;

  & > div > div > div > * {
    padding: 20px 0;
  }
  & > div > div > div > p > a {
    color: #000;
  }
  & > div > div > figure > img {
    background-size: cover;
    width: 100%;
  }
  & > div > div > figure > figcaption > * {
    font-weight: 600;
    font-size: 14px;
    color: #777777;
    font-weight: 100;
  }
  & > div > div > center {
    margin: 50px;
    font-size: 1em;
  }
`;

const EditBox = styled.div`
  position: fixed;
  width: calc(100vw - 80px);
  background:#fff; /*#FFF6D6*/
  box-shadow: #000 0px 8px 16px;
  bottom: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const EditWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`;

const EditItem = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  color: #5649CF;
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
`;

class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(actions.findArticle(match.params.id));
  }

  render() {
    const { article } = this.props;

    const minutes = article.length / 5;
    const ble = minutes / 200;
    const displayed = Math.ceil(ble.toFixed(2));

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: 800, padding: '3% 70px 5% 140px' }}>
          <StatBox top>
            <div>Tagged: {moment(article.createdAt).format('DD.MM.YYYY')}</div>
            <div>{article.tags ? article.tags.length : ''} tags</div>
          </StatBox>
          <h3>{article.url}</h3>
          <h1 style={{ fontSize: '2.3em', fontWeight: 700, paddingBottom: 22, lineHeight: '45px' }}>{article.title}</h1>
          <StatBox bottom>
            <div>#{article.tags}</div>
            <div style={{ display: 'flex' }}>Reading time: <StatTime> {displayed} min</StatTime></div>
          </StatBox>
          {!this.state.edit &&
            <ArticleText dangerouslySetInnerHTML={{ __html: article.content }} />
          }
          {this.state.edit &&
            <textarea style={{ width: '100%', height: 400 }}>
              {article.content}
            </textarea>
          }
        </div>
        <EditBox>
          <EditWrapper>
            <EditItem edit onClick={() => this.setState({ edit: !this.state.edit })}>Edit</EditItem>
            <EditItem highlight>Highlight</EditItem>
            <EditItem comment>Comment</EditItem>
            <EditItem members>Members</EditItem>
            <EditItem share>Share</EditItem>
            <EditItem archive>Archive</EditItem>
          </EditWrapper>
        </EditBox>
      </div>
    );
  }
}

Article.propTypes = {
  dispatch: PropTypes.func.isRequired,
  article: PropTypes.object,
};

Article.defaultProps = {
  article: { title: null, content: null },
};

function mapStateToProps(state) {
  return {
    article: state.articles.article,
  };
}

export default connect(mapStateToProps)(Article);
