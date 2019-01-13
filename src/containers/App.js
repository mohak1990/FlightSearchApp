import React from 'react';
import Dashboard from './Dashboard'
import FilterPanel from './FilterPanel'
import { connect } from 'react-redux'
import "../styles/css/containers/app.css"


class FlightSearchApp extends React.Component {

  render() {
    return (
      <div className = "flightSearchApp">
        <div className = "flightSearchApp--header"> Flight Search App </div>
        <div className="appContainer">
          <div className="filterPanelContainer">
            <FilterPanel />
          </div>
          <div className="dashboardContainer">
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = function(dispatch, ownProps){

  return {

  }
}

export default FlightSearchApp
