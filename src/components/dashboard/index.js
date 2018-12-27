import React from 'react';
import classNames from 'classnames';
import FlightDetail from '../flightDetail'
import "../../styles/css/components/dashboard.css"
import {getTimeDifference, getTravelTime} from "../../utils"

class Dashboard extends React.Component {


  render() {

    let dashboardClass = classNames({
      "dashboard": true,
      "dashboard--returnFlight": this.props.isReturnFlight
    })

    return (
      <div className = {dashboardClass}>
        <div className = "dashboard--header">
          Pune to Delhi
          <div className = "dashboard--header--info">
            Pune to Delhi
          </div>
        </div>
        <div className = "dashboard--content">
        {
          this.props.flights.map((data, i) => {
            return <FlightDetail
              flightDirection = {this.props.flightDirection}
              isReturnFlight = {this.props.isReturnFlight}
              selectOneWayFlight = {() => this.props.selectOneWayFlight(i)}
              selectReturnFlight = {() => this.props.selectReturnFlight(i)}
              flightSelected = {data.flightSelected}
              returnFlightSelected = {data.returnFlightSelected}
              data = {data.flightDetail}
              expandedView = {data.expandedView}
              showDetails = {() => this.props.showDetails(i)}
            />
          })
        }
        </div>
      </div>
    );
  }
}

export default Dashboard
