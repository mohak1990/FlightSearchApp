import React from 'react';
import FilterPanel from '../components/filterPanel'
import { connect } from 'react-redux'
import { setTrip, setOriginCity, setDestCity, setDepDate, setReturnDate, setPassengerCount } from '../modules/filterPanel'
import { filterFlights } from '../modules/dashboard'

class FilterPanelContainer extends React.Component {


  isDisabled(){
    return !(this.props.passengerCount != -1 &&
      this.props.originCity != "" &&
      this.props.destCity != "" &&
      this.props.depDate != null
      //this.props.returnDate != null
    )
  }

  render() {
    return (
        <FilterPanel
          passengers = {this.props.passengers}
          onClickTabItem = {this.props.setTrip}
          setOriginCity = {this.props.setOriginCity}
          setDestCity = {this.props.setDestCity}
          originCity = {this.props.originCity}
          destCity = {this.props.destCity}
          setDepDate = {this.props.setDepDate}
          setReturnDate = {this.props.setReturnDate}
          depDate = {this.props.depDate}
          returnDate = {this.props.returnDate}
          onSearch = {this.props.filterFlights}
          setPassengerCount = {this.props.setPassengerCount}
          isDisabled = {this.isDisabled()}
        />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    passengers : state.filterPanel.passengers,
    originCity : state.filterPanel.originCity,
    destCity : state.filterPanel.destCity,
    depDate : state.filterPanel.depDate,
    returnDate : state.filterPanel.returnDate,
})

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    filterFlights : () => dispatch(filterFlights()),

    setTrip : (status) => dispatch(setTrip(status)),
    setOriginCity : (city) => dispatch(setOriginCity(city)),
    setDestCity : (city) => dispatch(setDestCity(city)),
    setDepDate : (date) => dispatch(setDepDate(date)),
    setReturnDate : (date) => dispatch(setReturnDate(date)),
    setPassengerCount : (count) => dispatch(setPassengerCount(count))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanelContainer)
