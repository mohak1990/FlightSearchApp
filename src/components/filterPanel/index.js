import React from 'react';
import Tabs from '../userComponents/tabs';
import "../../styles/css/components/filterPanel.css"
import Input from "../userComponents/input";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class FilterPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="filter_panel">
        <Tabs>
          {[{type: "One Way"}, {type: "Return"}].map((val, i)=>{
            return (
              <div label={val.type}>
                <div>
                  <Input type="text" placeholder = "Enter Origin City" className="filter_panel--element" name="origin-city" placeholder="Enter Origin City" />
                </div>
                <div>
                  <Input type="text" placeholder = "Enter Destination City" className="filter_panel--element" name="dest-city" placeholder="Enter Destination City" />
                </div>
                <div>
                  <DatePicker
                    className="filter_panel--element"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
                {val.type === "One Way"?
                <div>
                  <DatePicker
                    className="filter_panel--element"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div> : null}
                <div>
                  <Input type="select" className="filter_panel--element" placeholder = "Select Passengers" options={[{value: "1", text: "1"}, {value: "2", text: "2"}, {value: "3", text: "3"}]} onSelect={[]}  name="passengers"/>
                </div>
                <div>
                  <Input type="button" className="filter_panel--element filter_panel--element--button" name="search"  value="Search"/>
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
