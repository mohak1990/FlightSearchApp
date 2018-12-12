import React from 'react';
import Tabs from '../userComponents/tabs';
import "../../styles/css/components/filterPanel.css"
class FilterPanel extends React.Component {

  render() {
    return (
      <div className="filter_panel">
        <Tabs>
          {[{type: "One Way"}, {type: "Return"}].map((val, i)=>{
            return (
              <div label={val.type}>
                <div>
                  <input name="origin-city"/>
                </div>
                <div>
                  <input name="dest-city" />
                </div>
                <div>
                  <input name="dep-date"/>
                </div>
                {val.type === "One Way"?
                <div>
                  <input name="return-date"/>
                </div> : null}
                <div>
                  <input name="passengers"/>
                </div>
                <div>
                  <DropDownComponent data={} onSelect={} />
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
