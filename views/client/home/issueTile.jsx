import React from 'react'

export default React.createClass({

  
  render(){

    return <div style={TILE_STYLES}>
        <div style={HEADER_STYLE}>{
              "Sample issue text sample issue text"
            }
        </div>
        <div style={DESCRIPTION_STYLE}>{
              "Sample issue description a b safjlsfd dsa adfj fadkljkl  sdalkjsdafkljdsaf dflk fsd"
            }
        </div>
        <div style={FOOTER_STYLE}>
          <div onClick={this.navigate} className={"tile-button"} style={DETAIL_BUTTON_STYLES}>
            { "LOL" }
          </div>
        </div>
    </div>

    
  },

  navigate: function(){
    alert("navigating to issue page");
  }

})

const TILE_STYLES = {
  width: "265px",
  height: "190px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  margin: 10
}

const HEADER_STYLE = {
  fontSize: "22px",
  color: "#333",
  height: "75px",
  width: "100%",
  boxSizing: "border-box",
  padding: 10
}

const DESCRIPTION_STYLE = {
  fontSize: "15px",
  color: "#666",
  height: "75px",
  width: "100%",
  boxSizing: "border-box",
  padding: 10
}

const FOOTER_STYLE = {
  fontSize: "15px",
  color: "#666",
  height: "45px",
  width: "100%",
  boxSizing: "border-box",
  padding: 10
}

const DETAIL_BUTTON_STYLES = {
  height: "25",
  width: "50px",
  boxSizing: "border-box",
  paddingLeft: 5,
  paddingRight: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}