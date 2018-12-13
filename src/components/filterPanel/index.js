import React from 'react';
import Tabs from '../userComponents/tabs';
import "../../styles/css/components/filterPanel.css"
import Input from "../userComponents/input";


class FilterPanel extends React.Component {

  render() {
    return (
      <div className="filter_panel">
        <Tabs>
          {[{type: "One Way"}, {type: "Return"}].map((val, i)=>{
            return (
              <div label={val.type}>
                <div>
                  <Input type="text" spaceHolder = "Enter Origin City" className="filter_panel--element" name="origin-city" placeholder="Enter Origin City" />
                </div>
                <div>
                  <Input type="text" spaceholder = "Enter Destination City" className="filter_panel--element" name="dest-city" placeholder="Enter Destination City" />
                </div>
                <div>
                  <Input type="text" className="filter_panel--element" name="dep-date"/>
                </div>
                {val.type === "One Way"?
                <div>
                  <Input type="text" className="filter_panel--element" name="return-date" />
                </div> : null}
                <div>
                  <Input type="select" className="filter_panel--element" options={[{value: "1", text: "1"}, {value: "2", text: "2"}, {value: "3", text: "3"}]} onSelect={[]}  name="passengers"/>
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
