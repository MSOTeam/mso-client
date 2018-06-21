import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from './actions';

class Shoppers extends Component {
   componentDidMount = () => {
     const { dispatch } = this.props;
     dispatch(actions.findShoppers());
   }

   render() {
     return (
       <div>asd</div>
     );
   }
}

Shoppers.propTypes = {
  dispatch: PropTypes.func.isRequired,
  shoppers: PropTypes.array,
};

Shoppers.defaultProps = {
  shoppers: [],
};

function mapStateToProps(state) {
  console.log(state);
  return {
    shoppers: state.shoppers,
  };
}

export default connect(mapStateToProps)(Shoppers);
