import React from 'react';
import classNames from 'classnames';
import FlightDetail from '../flightDetail'
import "../../styles/css/components/dashboard.css"

class Dashboard extends React.Component {

  render() {

    let dashboardClass = classNames({
      "dashboard": true,
      "dashboard--returnFlight": this.props.isReturnFlight
    })

    return (
      <div className = {dashboardClass}>
          <div className = "dashboard--content">
          {
            this.props.flights.map((data, i) => {
              return <FlightDetail
                key = {i}
                data = {data.flightDetail}
                expandedView = {data.expandedView}
                flightDirection = {this.props.flightDirection}
                flightSelected = {data.flightSelected}
                isReturnFlight = {this.props.isReturnFlight}
                returnFlightSelected = {data.returnFlightSelected}
                selectOneWayFlight = {() => this.props.selectOneWayFlight(i)}
                selectReturnFlight = {() => this.props.selectReturnFlight(i)}
                showDetails = {() => this.props.onShowDetails(i)}
              />
            })
          }
          </div>
      </div>
    );
  }
}

Dashboard.defaultProps = {
  flights: [],
  flightDirection: "One Way",
  isReturnFlight: false
};

export default Dashboard
