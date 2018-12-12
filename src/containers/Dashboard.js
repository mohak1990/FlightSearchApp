import React from 'react';
import Dashboard from '../components/dashboard'
import { connect } from 'react-redux'
import {  } from '../modules/dashboard'


class LoginContainer extends React.Component {

  render() {
    return (
        <Dashboard />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = function(dispatch, ownProps){

  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
