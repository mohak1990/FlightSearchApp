import React from 'react';
import { connect } from 'react-redux'
import "../../styles/css/containers/app.css"
import moment from 'moment'
import classNames from "classnames"


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

export default DashboardHeader
