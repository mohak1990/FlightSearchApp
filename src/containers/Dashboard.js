import React from 'react';
import Dashboard from '../components/dashboard'
import { connect } from 'react-redux'
import { getFlights, getReturnFlights, showDetails, selectOneWayFlight, selectReturnFlight } from '../modules/dashboard'


class DashboardContainer extends React.Component {

  render() {
    return (
      <div>
        <Dashboard
         flightDirection = {"One Way"}
         isReturnFlight = {this.props.isReturnFlight}
         selectOneWayFlight = {this.props.selectOneWayFlight}
         selectReturnFlight = {this.props.selectReturnFlight}
         flights = { this.props.flights }
         showDetails = {(i) => this.props.showDetails(i)}
         expandedView = {this.props.expandedView}
        />
        {this.props.isReturnFlight &&
          <Dashboard
            flightDirection = {"Return"}
            isReturnFlight = {this.props.isReturnFlight}
            selectReturnFlight = {this.props.selectReturnFlight}
            flights = { this.props.returnFlights }
            showDetails = {(i) => this.props.showDetails(i)}
            expandedView = {this.props.expandedView}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    flights: state.dashboard.flights,
    returnFlights: state.dashboard.returnFlights,
    isReturnFlight: state.filterPanel.isReturnFlight
})

const mapDispatchToProps = function(dispatch, ownProps){
  dispatch(getFlights())
  dispatch(getReturnFlights())
  return {
   getFlights: () => dispatch(getFlights()),
   getReturnFlights: () => dispatch(getReturnFlights()),
   showDetails: (i) => dispatch(showDetails(i)),

   selectOneWayFlight: (i) => dispatch(selectOneWayFlight(i)),
   selectReturnFlight: (i) => dispatch(selectReturnFlight(i))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)
