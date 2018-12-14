import React from 'react';
import Input from "../userComponents/input";
import "../../styles/css/components/flightDetail.css"
import {getTimeDifference, getTravelTime} from "../../utils"
import DetailsForm from "./detailsForm.js"

class FlightDetail extends React.Component {

  constructor(props){
      super(props)
  }

  render() {

    let data = this.props.data;

    return (
      <div>
        <DetailsForm data = {data} className={"flight_detail"} expandedView = {this.props.expandedView} showDetails={this.props.showDetails}/>
        {this.props.expandedView && data.flightType === "Multiple" &&
        <div className="flight_detail--expand">
          <DetailsForm data = {this.props.data} isOpened = {true} />
          <div className="flight_detail--expand--joiner">
            <span className="flight_detail--expand--joiner--layover">
              Layover time
            </span>
          </div>
          <DetailsForm data = {this.props.data} isOpened = {true} />
        </div>
        }
      </div>
    );
  }
}

export default FlightDetail
