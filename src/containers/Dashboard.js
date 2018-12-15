import React from 'react';
import Dashboard from '../components/dashboard'
import { connect } from 'react-redux'
import { getFlights, showDetails } from '../modules/dashboard'


class DashboardContainer extends React.Component {

  render() {
    return (
        <Dashboard flights = { this.props.flights } showDetails = {(i) => this.props.showDetails(i)} expandedView = {this.props.expandedView} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    flights: state.dashboard.flights 
})

const mapDispatchToProps = function(dispatch, ownProps){
  dispatch(getFlights())
  return {
     getFlights: () => dispatch(getFlights()),
     showDetails: (i) => dispatch(showDetails(i))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)
