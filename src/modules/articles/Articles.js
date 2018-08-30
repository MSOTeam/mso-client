import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from './actions';

class Articles extends Component {
   componentDidMount = () => {
     const { dispatch } = this.props;
     dispatch(actions.findArticles());
   }

   render() {
     const articles = this.props.articles.map(article => (
       <div style={{ paddingBottom: 20 }}>
         <div style={{ fontWeight: 600, fontSize: 20, cursor: 'pointer' }}>{article.title}</div>
         <div dangerouslySetInnerHTML={{ __html: article.content }} />
         <div>Length: {article.length}</div>
       </div>
     ));

     return (
       <div>
         {articles}
       </div>
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
