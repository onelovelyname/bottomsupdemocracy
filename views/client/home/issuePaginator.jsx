

import React from 'react'


// PROPS:
// page: number
// nPages: number
// nextPageHandler: () => void;
// prevPageHandler: () => void;

export default React.createClass({

  

  render(){

    return (<div style={ISSUE_FILTER_WRAPPER_STYLES}>
        <div onClick={this.prevPageHandler} style={BUTTON_WRAPPER_STYLES}>
            {"Previous"}
        </div>
        <div onClick={this.nextPageHandler} style={BUTTON_WRAPPER_STYLES}>
            {"Next"}
        </div>
    </div>)
    
  },

  nextPageHandler: () => {

      if(this.props.page !== (nPages-1)){
          this.props.nextPageHandler();
      }
        
  },

  prevPageHandler:  () => {

      if(this.props.page !== (0)){
          this.props.prevPageHandler();
      }

  }

})

const ISSUE_FILTER_WRAPPER_STYLES = {
    height: "50px",
    width: "100%",
    boxSizing: "border-box",
    display: "flex"
}

const BUTTON_WRAPPER_STYLES = {
    height: "100%",
    boxSizing: "border-box",
    padding: 10
}