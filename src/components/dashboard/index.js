import React from 'react';
import classNames from 'classnames';
import FlightDetail from '../flightDetail'
import moment from 'moment'
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
          {this.props.flightDirection === "One Way" ?
            this.props.originCity + " to " + this.props.destCity
            :
            this.props.destCity + " to " + this.props.originCity
          }
          <div className = "dashboard--header--info">
            {this.props.flights.length} flights found
            &nbsp;
            &nbsp;
            {this.props.flightDirection === "One Way" ? moment(this.props.setDepDate).format('MM/DD/YYYY') : moment(this.props.setReturnDate).format('MM/DD/YYYY') }
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
