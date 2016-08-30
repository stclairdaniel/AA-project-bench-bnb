import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: (state.session.currentUser ? true : false),
  errors: state.session.errors,
  formType: ownProps.location
});

const mapDispatchToProps = dispatch => ({
  processForm: (fun) => dispatch(fun)
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
