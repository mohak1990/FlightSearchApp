import React from 'react';
import Input from "../userComponents/input";
import "../../styles/css/components/flightDetail.css"
import {getTimeDifference, getTravelTime} from "../../utils"

class FlightDetail extends React.Component {

  render() {

    let data = this.props.data;

    return (
      <div className="flight_detail">
        <span className="flight_detail--items">
          <img src="/"/>
        </span>
        <span className="flight_detail--items">
          <div className="flight_detail--items--info">
            {data.name}
          </div>
          <div className="flight_detail--items--info--about">
            {data.flightNo}
          </div>
        </span>
        <span className="flight_detail--items">
          <div className="flight_detail--items--info">
            {data.departureTime}
          </div>
          <div className="flight_detail--items--info--about">
            {data.origin}
          </div>
        </span>
        <span className="flight_detail--items">
          <div className="flight_detail--items--info">
            {data.arrivalTime}
          </div>
          <div className="flight_detail--items--info--about">
            {data.destination}
          </div>
        </span>
        <span className="flight_detail--items">
          <div className="flight_detail--items--info">
            {getTravelTime(data)}
          </div>
          <div className="flight_detail--items--info--about">
            AI-101
          </div>
        </span>
        <span className="flight_detail--items flight_detail--items--amount">
          <div className="flight_detail--items--info ">
            {data.price}
          </div>
        </span>
        <span className="flight_detail--items">
          <Input type="button" className="flight_detail--items--button" value="Book"/>
        </span>
      </div>
    );
  }
}

export default FlightDetail
