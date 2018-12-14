import React from 'react';
import Dashboard from '../components/dashboard'
import { connect } from 'react-redux'
import { getFlights, showDetails } from '../modules/dashboard'


class DashboardContainer extends React.Component {

  render() {
    return (
        <Dashboard flights = { this.props.flights } showDetails = {this.props.showDetails} expandedView = {this.props.expandedView} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    flights: state.dashboard.flights,
    expandedView: state.dashboard.expandedView
})

const mapDispatchToProps = function(dispatch, ownProps){
  dispatch(getFlights())
  return {
     getFlights: () => dispatch(getFlights()),
     showDetails: () => dispatch(showDetails())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)
