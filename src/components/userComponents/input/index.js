import React from 'react';
import classNames from 'classnames';
import "../../../styles/css/components/userComponents/input.css"


class InputComponent extends React.Component {

  constructor(props){
    super(props);

  }

  render() {

    let inputClasses = classNames(
      this.props.className,{
      "disabled" : this.props.disabled
    })
    const type = this.props.type;
    const Type = this.props.type;
    const value = this.props.value;
    const name = this.props.name;
    const options = this.props.options;
    const placeholder = this.props.placeholder;

    if(type !== "select")
    {
      return (
         <input className = {inputClasses} disabled = {this.props.disabled} type={type} name = {this.props.name} value = {this.props.value} placeholder={placeholder} onClick ={this.props.onClick}/>
      );
    }
    else {
      return (
        <Type className = {inputClasses} onChange={(e)=>this.props.onChange(e.target.value)}>
          {placeholder &&
          <option disabled selected="true">
              {placeholder}
          </option>
          }
          {options.map((obj, i) => {
            return (
              <option value = {obj.value} key = {i}>
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
