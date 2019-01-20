import React from 'react';
import moment from 'moment';
import AutoComplete from "../userComponents/autoComplete";
import constants from "../../constants";
import DatePicker from "react-datepicker";
import Input from "../userComponents/input";
import Tabs from '../userComponents/tabs';
import "../../styles/css/components/filterPanel.css"
import "react-datepicker/dist/react-datepicker.css";

class FilterPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let flightInfo = constants.string.flightInfo;

    return (
      <div className="filter_panel">
        <Tabs onClickTabItem={this.props.onClickTabItem}>
          {[{type: flightInfo.type.oneWay}, {type: flightInfo.type.return}].map((val, i)=>{
            return (
              <div label={val.type} key={i}>
                <div>
                  <AutoComplete
                    type="text"
                    list = {constants.locations}
                    value={this.props.originCity}
                    onClick={(a) => this.props.setOriginCity(a.value)}
                    placeholder = "Enter Origin City"
                    className="filter_panel--element"
                    name="origin-city"
                  />
                </div>
                <div>
                  <AutoComplete
                    type="text"
                    list = {constants.locations}
                    value={this.props.destCity}
                    onClick={(a) => this.props.setDestCity(a.value)}
                    placeholder = "Enter Destination City"
                    className="filter_panel--element"
                    name="dest-city"
                  />
                </div>
                <div>
                  <DatePicker
                    className="filter_panel--element"
                    selected={this.props.depDate}
                    minDate={new Date()}
                    placeholderText="MM/DD/YYYY"
                    onChange={(date) => this.props.setDepDate(date)}
                  />
                </div>
                {val.type !== flightInfo.type.oneWay ?
                <div>
                  <DatePicker
                    className="filter_panel--element"
                    selected={this.props.returnDate}
                    minDate={moment(this.props.depDate).add(1, 'days')._d}
                    placeholderText="MM/DD/YYYY"
                    onChange={this.props.setReturnDate}
                  />
                </div> : null}
                <div>
                  <Input
                    type = "select"
                    className = "filter_panel--element"
                    placeholder = "Select Passengers"
                    options = {this.props.passengers}
                    onChange = {this.props.setPassengerCount}
                    selected = {this.props.passengerCount}
                    name = "passengers"
                  />
                </div>
                <div>
                  <Input
                    disabled = {this.props.isDisabled}
                    type="button"
                    className="filter_panel--element filter_panel--element--button"
                    name="search"
                    value="Search"
                    onClick={this.props.onSearch}
                  />
                </div>
              </div>
            )
          })
        }
        </Tabs>
      </div>
    );
  }
}

FilterPanel.defaultProps = {
   passengers : [],
   isDisabled: true,
   depDate: new Date(),
   returnDate: new Date()


};

export default FilterPanel
