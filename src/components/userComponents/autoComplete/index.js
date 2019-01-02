import React, {Fragment} from 'react';
import "../../../styles/css/components/userComponents/autoComplete.css"


class AutoCompleteComponent extends React.Component {

  constructor(props){
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      value: "",
      key: "",
      cityList: [
        {key: "pun", value: "Pune (PNQ)"},
        {key: "bom", value: "Mumbai (BOM)"},
        {key: "blr", value: "Bengaluru (BLR)"},
        {key: "del", value: "Delhi (DEL)"}
      ],
      ddlList: [],
      showddlList: false
    };
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
       this.setState({showddlList: false});
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  enterText(e){

    const val = e.target.value;
    let ddlListArr = this.state.cityList.filter((item, i) => {
      if(val.trim() !== "" && item.value.toLowerCase().startsWith(val.toLowerCase()))
      {
        return true;
      }
      return false;
    })

    this.setState({showddlList: true, ddlList: ddlListArr, value: val, key: ""});
  }

  onClick(obj){
    this.setState({showddlList: false, value: obj.value, key: obj.key});
    this.props.onClick(obj)
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {
       
      return (
          <Fragment>
            <div className="inputAutoComplete" ref={this.setWrapperRef}>
              <div className = "inputBox">
                <input
                  className = {this.props.className}
                  onChange={(e) => this.enterText(e)}
                  value = {this.state.value}
                  placeholder={this.props.placeholder}
                />
              </div>
               <div className = "autoComplete">
               {
                 this.state.ddlList.map((obj, i)=>{
                   if(this.state.showddlList)
                   {
                     return <div className="autoComplete--dropDown" key={obj.key} onClick={() => this.onClick(obj)}>
                        {obj.value}
                     </div>
                   }
                 })
               }
               </div>

            </div>
           </Fragment>
      );
    }
}

export default AutoCompleteComponent
