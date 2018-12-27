import React from 'react';
import Tabs from '../userComponents/tabs';
import "../../styles/css/components/filterPanel.css"
import Input from "../userComponents/input";
import AutoComplete from "../userComponents/autoComplete";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class FilterPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      depDate: new Date(),
      retDate: new Date()
    };
    this.handleChangeDep = this.handleChangeDep.bind(this);
    this.handleChangeRet = this.handleChangeRet.bind(this);
  }

  handleChangeDep(date) {
    this.setState({
      depDate: date
    });
  }

  handleChangeRet(date) {
    this.setState({
      retDate: date
    });
  }

  render() {
    return (
      <div className="filter_panel">
        <Tabs onClickTabItem={this.props.onClickTabItem}>
          {[{type: "One Way"}, {type: "Return"}].map((val, i)=>{
            return (
              <div label={val.type}>
                <div>
                  <AutoComplete type="text" onClick={() => {}} placeholder = "Enter Origin City" className="filter_panel--element" name="origin-city" />
                </div>
                <div>
                  <AutoComplete type="text" onClick={() => {}} placeholder = "Enter Destination City" className="filter_panel--element" name="dest-city" />
                </div>
                <div>
                  <DatePicker
                    className="filter_panel--element"
                    selected={this.state.depDate}
                    onChange={this.handleChangeDep}
                  />
                </div>
                {val.type !== "One Way"?
                <div>
                  <DatePicker
                    className="filter_panel--element"
                    selected={this.state.retDate}
                    onChange={this.handleChangeRet}
                  />
                </div> : null}
                <div>
                  <Input type="select" className="filter_panel--element" placeholder = "Select Passengers" options={this.props.passengers} onSelect={[]}  name="passengers"/>
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
