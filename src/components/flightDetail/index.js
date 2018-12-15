import React from 'react';
import Input from "../userComponents/input";
import "../../styles/css/components/flightDetail.css"
import {getTimeDifference, getTravelTime} from "../../utils"
import DetailsForm from "./detailsForm.js"

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
            {data.multiple.map((d)=>{
                return (
                  <DetailsForm
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
