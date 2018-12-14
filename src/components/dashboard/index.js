import React from 'react';
import FlightDetail from '../flightDetail'
import "../../styles/css/components/dashboard.css"


class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <div className = "dashboard--header">
          Pune to Delhi
          <div className = "dashboard--header--info">
            Pune to Delhi
          </div>
        </div>
        <div className = "dashboard--content">
        {
          this.props.flights.map((data, i) => {
            return <FlightDetail data = {data} expandedView = {this.props.expandedView} showDetails = {this.props.showDetails} />
          })
        }
        </div>
      </div>
    );
  }
}

export default Dashboard
