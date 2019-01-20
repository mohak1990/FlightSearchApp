import React from 'react';
import classNames from "classnames"
import moment from 'moment'
import "../../styles/css/containers/app.css"

class DashboardHeader extends React.Component {

  render() {

    let headerClass = classNames({
      "dashboard--header" : true,
      "dashboard--returnFlight" : this.props.isReturnFlight
    })

    return (
      <div className = {headerClass}>
        {
          this.props.originCity + " to " + this.props.destCity
        }
        <div className = "dashboard--header--info">
          {this.props.flights.length} flights found
          &nbsp;
          &nbsp;
          {moment(this.props.date).format('MM/DD/YYYY')}
        </div>
      </div>
    );
  }
}

DashboardHeader.defaultProps = {
  flights: [],
  originCity: "",
  destCity: ""
};

export default DashboardHeader
