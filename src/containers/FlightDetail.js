import React from 'react';
import FlightDetail from '../components/flightDetail'
import { connect } from 'react-redux'
import {  } from '../modules/filterPanel'

class FlightDetailContainer extends React.Component {

  render() {
    return (
        <FlightDetail />
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
)(FlightDetailContainer)
