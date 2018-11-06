import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from './actions';

class Article extends Component {
 
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(actions.findArticle(match.params.id));
  }

  render() {
    const { article } = this.props;
    
    return (
      <div style={{ width: 800, padding: '3% 70px 5% 140px' }}>
        <h1 style={{ fontSize: 26, fontWeight: 600, paddingBottom: 28 }}>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
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
