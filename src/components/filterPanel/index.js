import React from 'react';
import Tabs from '../userComponents/tabs';
import "../../styles/css/components/filterPanel.css"
import Input from "../userComponents/input";
import AutoComplete from "../userComponents/autoComplete";
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

class FilterPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="filter_panel">
        <Tabs onClickTabItem={this.props.onClickTabItem}>
          {[{type: "One Way"}, {type: "Return"}].map((val, i)=>{
            return (
              <div label={val.type}>
                <div>
                  <AutoComplete
                    type="text"
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
                    value={this.props.destCity.value}
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
                    onChange={(date) => this.props.setDepDate(date)}
                  />
                </div>
                {val.type !== "One Way"?
                <div>
                  <DatePicker
                    className="filter_panel--element"
                    selected={this.props.returnDate}
                    minDate={moment(this.props.depDate).add(1, 'days')._d}
                    onChange={this.props.setReturnDate}
                  />
                </div> : null}
                <div>
                  <Input type="select" className="filter_panel--element" placeholder = "Select Passengers" options={this.props.passengers} onChange={this.props.setPassengerCount} name="passengers"/>
                </div>
                <div>
                  <Input disabled = {this.props.isDisabled} type="button" className="filter_panel--element filter_panel--element--button" name="search" value="Search" onClick={this.props.onSearch}/>
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

export default FilterPanel
