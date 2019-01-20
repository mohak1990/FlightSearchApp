import React from 'react';
import classNames from 'classnames'
import Dashboard from './Dashboard'
import FilterPanel from './FilterPanel'
import constants from "../constants";
import { connect } from 'react-redux'
import "../styles/css/containers/app.css"
import { setModal } from '../modules/ui'
import { confirmBooking } from '../modules/dashboard'
import { checkSelection } from "../utils"


class FlightSearchApp extends React.Component {

  render() {

    let setModal = this.props.setModal;
    let confirmBooking = this.props.confirmBooking;
    let isReturnFlight = this.props.isReturnFlight;
    let flights = this.props.flights;
    let returnFlights = this.props.returnFlights;
    let isBookingAvailable = checkSelection(isReturnFlight, flights, returnFlights);
    let footerClasses = classNames({
      "flightSearchApp--book" : true,
      "flightSearchApp--book--disable" : !isBookingAvailable
    })

    return (
      <div className = "flightSearchApp">
        <div className = "flightSearchApp--header"> {constants.string.appName} </div>
        <div className="appContainer">
          <div className="filterPanelContainer">
            <FilterPanel />
          </div>
          <div className="dashboardContainer">
            <Dashboard />
          </div>
        </div>
        <input className = {footerClasses} disabled={!isBookingAvailable} type ="button" value="Book" onClick = {() => setModal(true)} />
        {this.props.isModalOpen && (
        <div className = "confirmBooking">
          <div className = "confirmBooking--modal">
            <div className='title'> {constants.string.confirmBox.title}
              <span className = "cancelIcon" onClick={() => setModal(false)}></span>
            </div>
            <div className='info'>{constants.string.confirmBox.warning}</div>
            <div className='footer'>
              <input value="Confirm" type="button" onClick={() => confirmBooking(isBookingAvailable)}/>
              <input value="Cancel" type="button" onClick={() => setModal(false)} />
            </div>
          </div>
        </div>
        )
      }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    isModalOpen: state.ui.isModalOpen,
    isReturnFlight: state.filterPanel.isReturnFlight,
    flights: state.dashboard.flights,
    returnFlights: state.dashboard.returnFlights
})

const mapDispatchToProps = function(dispatch, ownProps){

  return {
    setModal: (i) => dispatch(setModal(i)),
    confirmBooking: (i) => dispatch(confirmBooking(i))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightSearchApp)
