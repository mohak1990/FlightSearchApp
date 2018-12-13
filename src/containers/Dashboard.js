import React from 'react';
import Dashboard from '../components/dashboard'
import { connect } from 'react-redux'
import { getFlights } from '../modules/dashboard'


class DashboardContainer extends React.Component {

  render() {
    return (
        <Dashboard flights = { this.props.flights }/>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    flights: state.dashboard.flights
})

const mapDispatchToProps = function(dispatch, ownProps){
  dispatch(getFlights())
  return {
     getFlights: dispatch(() => getFlights()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)
