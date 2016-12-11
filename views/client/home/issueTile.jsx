import React from 'react'

export default React.createClass({

  
  render(){

    return <div style={TILE_STYLES}>
        <div style={HEADER_STYLE}>{
              this.props.issue.title
            }
        </div>
        <div style={FOOTER_STYLE}>
          <div onClick={this.navigate} className={"tile-button"} style={DETAIL_BUTTON_STYLES}>
            { "Weigh In" }
          </div>
        </div>
    </div>

    
  },

  navigate: function(){ 
    location.replace(location.href + "data/"+ this.props.issue._id);
  }

})

const TILE_STYLES = {
  position: "relative",
  width: "265px",
  height: "190px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  margin: 10
}

const HEADER_STYLE = {
  fontSize: "15px",
  color: "#333",
  height: "75px",
  width: "100%",
  boxSizing: "border-box",
  padding: 10
}

const DESCRIPTION_STYLE = {
  fontSize: "12px",
  color: "#666",
  height: "75px",
  width: "100%",
  boxSizing: "border-box",
  padding: 10
}

const FOOTER_STYLE = {
  position: "absolute",
  bottom: 0,
  left: 0,
  fontSize: "15px",
  color: "#666",
  height: "45px",
  width: "100%",
  boxSizing: "border-box",
  padding: 10
}

const DETAIL_BUTTON_STYLES = {
  height: "25px",
  width: "80px",
  boxSizing: "border-box",
  paddingLeft: 5,
  paddingRight: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}