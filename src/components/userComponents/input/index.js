import React from 'react';

class InputComponent extends React.Component {

  constructor(props){
    super(props);

  }

  render() {
    const type = this.props.type;
    const Type = this.props.type;
    const value = this.props.value;
    const name = this.props.name;
    const options = this.props.options;
    const className = this.props.className;
    const spaceholder = this.props.spaceholder;
    
    if(type != "select")
    {
      return (
         <input className = {className} type={type} value = {this.props.value} spaceholder={spaceholder} />
      );
    }
    else {
      return (
        <Type className = {className} onChange={(e)=>alert(e.target.value)}>
          <option>
            Select Passengers
          </option>
          {options.map((obj, i) => {
            return (
              <option value = {obj.value}>
                {obj.value}
              </option>
            )
          })
          }
        </Type>
      );
    }
  }
}

export default InputComponent
