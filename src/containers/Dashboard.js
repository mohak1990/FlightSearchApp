import React, {Fragment} from 'react';
import Dashboard from '../components/dashboard'
import DashboardHeader from '../components/dashboard/header'
import { connect } from 'react-redux'
import { showDetails, selectOneWayFlight, selectReturnFlight } from '../modules/dashboard'


class DashboardContainer extends React.Component {

  render() {
    return (
      <Fragment>
      {this.props.flights.length ? (
        <Fragment>
          <DashboardHeader
            flights = {this.props.flights}
            isReturnFlight = {this.props.isReturnFlight}
            originCity = {this.props.originCity}
            destCity = {this.props.destCity}
            date = {this.props.depDate}
          />
          {this.props.isReturnFlight &&
            <DashboardHeader
              isReturnFlight = {this.props.isReturnFlight}
              flights = {this.props.returnFlights}
              originCity = {this.props.destCity}
              destCity = {this.props.originCity}
              date = {this.props.returnDate}
            />
          }
          <div className = "dashboard--show-flights">
            <Dashboard
             flightDirection = {"One Way"}
             isReturnFlight = {this.props.isReturnFlight}
             selectOneWayFlight = {this.props.selectOneWayFlight}
             selectReturnFlight = {this.props.selectReturnFlight}
             flights = { this.props.flights }
             showDetails = {(i) => this.props.showDetails(i)}
             expandedView = {this.props.expandedView}
             originCity = {this.props.originCity}
             destCity = {this.props.destCity}
             setDepDate = {this.props.depDate}
            />
            {this.props.isReturnFlight &&
              <Dashboard
                flightDirection = {"Return"}
                isReturnFlight = {this.props.isReturnFlight}
                selectReturnFlight = {this.props.selectReturnFlight}
                flights = { this.props.returnFlights }
                showDetails = {(i) => this.props.showDetails(i)}
                expandedView = {this.props.expandedView}
                originCity = {this.props.originCity}
                destCity = {this.props.destCity}
                setReturnDate = {this.props.returnDate}
              />
            }
          </div>
        </Fragment>
      )
      :
      <div className = "dashboard--no-flights">
        Search for Flights
      </div>
      }
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    flights: state.dashboard.flights,
    returnFlights: state.dashboard.returnFlights,
    isReturnFlight: state.filterPanel.isReturnFlight,
    originCity: state.filterPanel.originCity,
    destCity: state.filterPanel.destCity,
    depDate: state.filterPanel.depDate,
    returnDate: state.filterPanel.returnDate
})

const mapDispatchToProps = function(dispatch, ownProps){
  return {
   showDetails: (i) => dispatch(showDetails(i)),
   selectOneWayFlight: (i) => dispatch(selectOneWayFlight(i)),
   selectReturnFlight: (i) => dispatch(selectReturnFlight(i))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)
