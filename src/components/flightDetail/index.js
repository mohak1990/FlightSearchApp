import React from 'react';
import Input from "../userComponents/input";
import "../../styles/css/components/flightDetail.css"

class FlightDetail extends React.Component {

  render() {
    return (
      <div className="flight_detail">
        <span className="flight_detail--items">
          <img src="/"/>
        </span>
        <span className="flight_detail--items">
          <div className="flight_detail--items--info">
            Air India
          </div>
          <div className="flight_detail--items--info--about">
            AI-101
          </div>
        </span>
        <span className="flight_detail--items">
          <div className="flight_detail--items--info">
            Air India
          </div>
          <div className="flight_detail--items--info--about">
            AI-101
          </div>
        </span>
        <span className="flight_detail--items">
          <div className="flight_detail--items--info">
            Air India
          </div>
          <div className="flight_detail--items--info--about">
            AI-101
          </div>
        </span>
        <span className="flight_detail--items">
          <div className="flight_detail--items--info">
            Air India
          </div>
          <div className="flight_detail--items--info--about">
            AI-101
          </div>
        </span>
        <span className="flight_detail--items">
          <div className="flight_detail--items--info flight_detail--items--info--amount">
            Rs. 500
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
