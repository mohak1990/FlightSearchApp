import React from 'react';
import classNames from 'classnames';
import FlightDetail from '../flightDetail'
import moment from 'moment'
import "../../styles/css/components/dashboard.css"
import {getTimeDifference, getTravelTime} from "../../utils"

class Dashboard extends React.Component {


  render() {

    let dashboardClass = classNames({
      "dashboard--returnFlight": this.props.isReturnFlight
    })

    return (
      <div className = {dashboardClass}>
        <div className = "dashboard">
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
      </div>
    );
  }
}

export default Dashboard
