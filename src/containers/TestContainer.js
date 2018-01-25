import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/gstReturnActions';

import AdminPage from '../components/admin/AdminPage';
 
export const Test = (props) => {
    return (
        <AdminPage
        updateGstAction={props.actions.updateGstAction}
        gstReview={props.gstReview}
        />
    );
};

AdminPage.propTypes = {
  actions: PropTypes.object.isRequired,
  gstReview: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    gstReview: state.gstReturn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Test);