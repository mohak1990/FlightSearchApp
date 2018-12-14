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

    let data = this.props.data;
    let isOpened = this.props.isOpened;
    let expandedView = this.props.expandedView;
    let classes = classNames({
      "flight_detail" : !isOpened 
    })

    return (
      <div>
        <div className={classes}>
          <span className="flight_detail--items">
            <img src="/"/>
          </span>
          <span className="flight_detail--items">
            <div className="flight_detail--items--info">
              {data.flightType === "Multiple" && !isOpened ? "Multiple" : data.name}
            </div>
            <div className="flight_detail--items--info--about">
              {data.flightType === "Multiple" && !isOpened ?
                <a href="#" onClick={this.props.showDetails}>
                  {!expandedView ? "Show details" : "Hide details"}
                </a>
                :
                data.flightNo
              }
            </div>
          </span>
          <span className="flight_detail--items">
            <div className="flight_detail--items--info">
              {data.departureTime}
            </div>
            <div className="flight_detail--items--info--about">
              {data.origin.split("(")[0]}
            </div>
          </span>
          <span className="flight_detail--items">
            <div className="flight_detail--items--info">
              {data.arrivalTime}
            </div>
            <div className="flight_detail--items--info--about">
              {data.destination.split("(")[0]}
            </div>
          </span>
          <span className="flight_detail--items">
            <div className="flight_detail--items--info">
              {getTravelTime(data)}
            </div>
            <div className="flight_detail--items--info--about">
              {data.flightType === "Multiple" ? "Total duration" : data.flightType}
            </div>
          </span>
          <span className="flight_detail--items flight_detail--items--amount">
            {!isOpened &&
            <div className="flight_detail--items--info ">
              &#8377; {data.price}
            </div>
            }
          </span>
          <span className="flight_detail--items">
            {!isOpened &&
            <Input type="button" className="flight_detail--items--button" value="Book"/>
            }
          </span>
        </div>

      </div>
    );
  }
}

export default DetailsForm
