import React, {Fragment} from 'react';
import Input from "../userComponents/input";
import "../../styles/css/components/flightDetail.css"
import {getTimeDifference, getTravelTime} from "../../utils"
import DetailsForm from "./detailsForm.js"
import classNames from "classnames"

class FlightDetail extends React.Component {

  constructor(props){
      super(props)
  }

  isMultiple(data){
    if("multiple" in data)
    {
      return true
    }
    return false;
  }

  getFlightName(data){
    return data.name;
  }

  getFlightNumber(data){
    return data.flightNo;
  }

  getOrigin(data){
    if(this.isMultiple(data))
    {
      return data.multiple[0].origin;
    }
    return data.origin;
  }

  getDepDate(data){

    if(this.isMultiple(data))
    {
      return data.multiple[0].date;
    }
    return data.date;
  }

  getDepTime(data){

    if(this.isMultiple(data))
    {
      return data.multiple[0].departureTime;
    }
    return data.departureTime;
  }

  getArrStopDate(data){

    if(this.isMultiple(data))
    {
      return data.multiple[0].date;
    }
    return data.date;
  }

  getArrStopTime(data){

    if(this.isMultiple(data))
    {
      return data.multiple[0].arrivalTime;
    }
    return data.departureTime;
  }

  getDepStopDate(data){

    if(this.isMultiple(data))
    {
      return data.multiple[1].date;
    }
    return data.date;
  }

  getDepStopTime(data){

    if(this.isMultiple(data))
    {
      return data.multiple[1].departureTime;
    }
    return data.departureTime;
  }

  getDest(data){
    if(this.isMultiple(data))
    {
      return data.multiple[1].destination;
    }
    return data.destination;
  }

  getArrDate(data){
    if(this.isMultiple(data))
    {
      return data.multiple[1].date;
    }
    return data.date;
  }

  getArrTime(data){
    if(this.isMultiple(data))
    {
      return data.multiple[1].arrivalTime;
    }
    return data.arrivalTime;
  }

  getTimeTaken(data){
      const travelTime = getTravelTime(this.getDepDate(data), this.getDepTime(data), this.getArrDate(data), this.getArrTime(data))
      return travelTime;
  }

  getLayoverTime(data){
      const layover = getTravelTime(this.getArrStopDate(data), this.getArrStopTime(data), this.getDepStopDate(data), this.getDepStopTime(data))
      return layover;
  }

  getTotalPrice(data){
    if(this.isMultiple(data)){
      const travelPrice = data.multiple[0].price + data.multiple[1].price;
      return travelPrice;
    }
    return data.price;
  }

  render() {

    const data = this.props.data;

    return (
      <div>
        <DetailsForm
          flightDirection = {this.props.flightDirection}
          isReturnFlight = {this.props.isReturnFlight}
          selectOneWayFlight = {this.props.selectOneWayFlight}
          selectReturnFlight = {this.props.selectReturnFlight}
          flightSelected = {this.props.flightSelected}
          returnFlightSelected = {this.props.returnFlightSelected}
          isMultiple = {this.isMultiple(data)}
          flightName = {this.getFlightName(data)}
          flightNumber = {this.getFlightNumber(data)}
          origin = {this.getOrigin(data)}
          dest = {this.getDest(data)}
          depTime = {this.getDepTime(data)}
          arrTime = {this.getArrTime(data)}
          timeTaken = {this.getTimeTaken(data)}
          totalPrice = {this.getTotalPrice(data)}
          expandedView = {this.props.expandedView}
          showDetails = {this.props.showDetails}
        />
        {this.props.expandedView && this.isMultiple(data) ?
          <div className="flight_detail--expand">
            <div className="flight_detail--expand--joiner">
              <span className="flight_detail--expand--joiner--layover">
                Layover time : {this.getLayoverTime(data)}
              </span>
            </div>
            {data.multiple.map((d, i)=>{
                return (
                    <DetailsForm
                      isReturnFlight = {this.props.isReturnFlight}
                      index = {i}
                      multiflightCount = {data.multiple.length - 1}
                      isMultiple = {true}
                      isOpened = {true}
                      flightName = {d.name}
                      flightNumber = {d.flightNo}
                      origin = {d.origin}
                      dest = {d.destination}
                      depTime = {d.departureTime}
                      arrTime = {d.arrivalTime}
                      timeTaken = {this.getTimeTaken(d)}
                      totalPrice = {d.price}
                      expandedView = {this.props.expandedView}
                      showDetails = {this.props.showDetails}
                  />
              )
            })
          }
          </div>
          :
          null
        }
      </div>
    );
  }
}

export default FlightDetail
