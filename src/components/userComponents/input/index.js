import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "../../../styles/css/components/userComponents/input.css"

class InputComponent extends React.Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onChange: PropTypes.func
  }

  render() {

    let inputClasses = classNames(
      this.props.className, {
      "disabled" : this.props.disabled
    })
    const Type = this.props.type;
    const options = this.props.options;
    const placeholder = this.props.placeholder;

    if(Type !== "select")
    {
      return (
         <input
          className = {inputClasses}
          disabled = {this.props.disabled}
          type={Type} name = {this.props.name}
          value = {this.props.value}
          placeholder={placeholder}
          onClick ={this.props.onClick}
        />
      );
    }
    else {
      return (
        <Type className = {inputClasses} onChange={(e)=>this.props.onChange(e.target.value)} value={this.props.selected}>
          {placeholder &&
          <option value={"0"} key={0}>
              {placeholder}
          </option>
          }
          {options.map((obj, i) => {
            return (
              <option value = {obj.value} key = {i+1}>
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
