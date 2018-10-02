import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { push } from 'react-router-redux';
import * as actions from './actions';

class Articles extends Component {
   componentDidMount = () => {
     const { dispatch } = this.props;
     dispatch(actions.findArticles());
   }

   render() {
     const { dispatch } = this.props;
     const articles = this.props.articles.map(article => (
       <div
         onClick={() => dispatch(push(`${'/article/'}${article._id}`))}
         style={{ paddingBottom: 20 }}
       >
         <div style={{ fontWeight: 600, fontSize: 18, paddingBottom: 20 }}>
           {article.tags.map(tag => (<span style={{ paddingRight: 8 }}>{tag}</span>))}
         </div>
         <div style={{ fontWeight: 600, fontSize: 20, cursor: 'pointer' }}>{article.title}</div>
         <div dangerouslySetInnerHTML={{ __html: article.excerpt }} />
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
