import React from 'react';
import classNames from "classnames"
import constants from "../../constants";
import "../../styles/css/components/flightDetail.css"
import img from "../../images/img_flight.png"

class DetailsForm extends React.Component {

  showDetails(e){
    e.stopPropagation();
    this.props.showDetails();
  }

  render() {

    let flightInfo = constants.string.flightInfo;
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
      "flight_detail_return" : isReturnFlight && !isOpened,
      "flight_detail--selected" : this.props.flightSelected || this.props.returnFlightSelected,
      "flight_detail--first" : isOpened && this.props.index === 0,
      "flight_detail--last" : isOpened && this.props.index === this.props.multiflightCount
    })
    let imageClass = classNames({
      "flight_detail--image": true,
      "flight_detail--image--return": flightDirection === flightInfo.type.return
    })
    return (
      <div>
        <div className={classes} onClick={flightDirection === flightInfo.type.return ? this.props.selectReturnFlight : this.props.selectOneWayFlight}>
          <span className="flight_detail--items flight_detail--items--img">
            <img className={imageClass} src={img} alt="flightimg"/>
          </span>
          <span className="flight_detail--items">
            <div className="flight_detail--items--info">
              {isMultiple && !isOpened ? flightInfo.multiple : flightName}
            </div>
            <div className="flight_detail--items--info--about">
              {isMultiple && !isOpened ?
                <a href="#" onClick={(e) => this.showDetails(e)}>
                  {!expandedView ? flightInfo.showDetails : flightInfo.hideDetails}
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
          <span className="flight_detail--items flight_detail--items--timeTaken">
            <div className="flight_detail--items--info flight_detail--items--info">
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
        </div>
      </div>
    );
  }
}

export default DetailsForm
