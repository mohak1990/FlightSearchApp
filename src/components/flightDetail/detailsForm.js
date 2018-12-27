import React from 'react';
import Input from "../userComponents/input";
import "../../styles/css/components/flightDetail.css"
import {getTimeDifference, getTravelTime} from "../../utils"
import classNames from "classnames"

class DetailsForm extends React.Component {

  constructor(props){
      super(props)
  }

  render() {
    let flightDirection = this.props.flightDirection;
    let isOpened = this.props.isOpened;
    let isReturnFlight = this.props.isReturnFlight;
    let expandedView = this.props.expandedView;

    let flightName = this.props.flightName;
    let flightNumber = this.props.flightNumber;
    let isMultiple = this.props.isMultiple;
    let origin = this.props.origin;
    let dest = this.props.dest;
    let depTime = this.props.depTime;
    let arrTime = this.props.arrTime;
    let timeTaken = this.props.timeTaken;
    let totalPrice = this.props.totalPrice;

    let classes = classNames({
      "flight_detail" : !isOpened,
      "flight_detail_return" : isReturnFlight,
      "flight_detail--selected" : this.props.flightSelected || this.props.returnFlightSelected,
      "flight_detail--first" : isOpened && this.props.index == 0,
      "flight_detail--last" : isOpened && this.props.index == this.props.multiflightCount
    })
    return (
      <div>
        <div className={classes} onClick={flightDirection == "Return" ? this.props.selectReturnFlight : this.props.selectOneWayFlight}>
          <span className="flight_detail--items">
            <img src="/"/>
          </span>
          <span className="flight_detail--items">
            <div className="flight_detail--items--info">
              {isMultiple && !isOpened ? "Multiple" : flightName}
            </div>
            <div className="flight_detail--items--info--about">
              {isMultiple && !isOpened ?
                <a href="#" onClick={this.props.showDetails}>
                  {!expandedView ? "Show details" : "Hide details"}
                </a>
                :
                flightNumber
              }
            </div>
          </span>
          <span className="flight_detail--items">
            <div className="flight_detail--items--info">
              {depTime}
            </div>
            <div className="flight_detail--items--info--about">
              {origin.split("(")[0]}
            </div>
          </span>
          <span className="flight_detail--items">
            <div className="flight_detail--items--info">
              {arrTime}
            </div>
            <div className="flight_detail--items--info--about">
              {dest.split("(")[0]}
            </div>
          </span>
          <span className="flight_detail--items">
            <div className="flight_detail--items--info">
              {timeTaken}
            </div>
            <div className="flight_detail--items--info--about">
              {isMultiple ? "Total duration" : "Non-Stop"}
            </div>
          </span>
          <span className="flight_detail--items flight_detail--items--amount">
            {!isOpened &&
            <div className="flight_detail--items--info ">
              &#8377; {totalPrice}
            </div>
            }
          </span>
          <span className="flight_detail--items">
            {!isOpened && !isReturnFlight ?
            <Input type="button" className="flight_detail--items--button" value="Book"/>
            :
            null
            }
          </span>
        </div>

      </div>
    );
  }
}

export default DetailsForm
