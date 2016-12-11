

import React from 'react'
import DropDownList from '../components/dropDownList.jsx'

var scaleOptions = [
        { value: 0, name: "local"},
        { value: 1, name: "national"}
    ];

    var issueOptions = [
        { value: 0, name: "abortion"},
        { value: 1, name: "immigration"},
    ];

    var statusOptions = [
        { value: 0, name: "not voted on"},
        { value: 1, name: "delegated"},
    ];

export default React.createClass({

  
  scaleDropDown: DropDownList,
  issueDropDown: DropDownList,
  statusDropDown: DropDownList,

    
  componentWillMount: function(){
      var initialState = {
          selectedScale: 0,
          selectedIssue: 0,
          selectedStatus: 0
      };
      this.setState(initialState);
  },

  componentDidUpdate: function(){
      alert("new filter options!");
  },

  render(){
  

    return (<div style={ISSUE_FILTER_WRAPPER_STYLES}>
        <div style={HEADER_TEXT_STYLES}>
            {"Show me "}
        </div>
        <div style={BUTTON_WRAPPER_STYLES}>
            <DropDownList 
            onChange={(val) => {var nextState = {selectedScale: val}; this.setState(nextState)}}
            ref={(elt)=>{this.scaleDropDown=elt;}} value={this.state.selectedScale} options={scaleOptions}/>
        </div>
        <div style={HEADER_TEXT_STYLES}>
            {"issues about "}
        </div>
         <div style={BUTTON_WRAPPER_STYLES}>
             <DropDownList 
             onChange={(val) => {var nextState = {selectedIssue: val}; this.setState(nextState)}}
             ref={(elt)=>{this.issueDropDown=elt;}} value={this.state.selectedIssue} options={issueOptions}/>
        </div>
        <div style={HEADER_TEXT_STYLES}>
            {"that I have"}
        </div>
         <div style={BUTTON_WRAPPER_STYLES}>
             <DropDownList 
             onChange={(val) => {var nextState = {selectedStatus: val}; this.setState(nextState)}}
             ref={(elt)=>{this.statusDropDown=elt;}} value={this.state.selectedStatus} options={statusOptions}/>
        </div>
    </div>)
  }

})

const ISSUE_FILTER_WRAPPER_STYLES = {
    height: "50px",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap"
}




const BUTTON_WRAPPER_STYLES = {
    height: "100%",
    boxSizing: "border-box",
    padding: 10
}

const HEADER_TEXT_STYLES = {
    height: "100%",
    boxSizing: "border-box",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}