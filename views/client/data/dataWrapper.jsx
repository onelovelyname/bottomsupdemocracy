import React from 'react';
import $ from 'jquery';


export default React.createClass({

  getInitialState : function getInitialState() {
      return {
          issues : [

            
          ],
      };
  },

  componentWillMount: function componentWillMount() {
 
  },

  componentDidMount: function componentDidMount() {
    console.log(this.state.issues);
  },

  divRef: HTMLDivElement,

  render(){

    return ( 
      <div ref={(elt) => {}} style={WRAPPER_STYLES}>
        <div style={CONTAINER_STYLES}>
            <div style={QUESTION_PANE_STYLES}>
              <div style={HEADER_STYLE}>
              </div>
              <div style={DESCRIPTION_STYLE}>
              </div>
              <div style={FOOTER_STYLE}>
                <div style={BUTTON_STYLES}>
                   {"Delegate"}
                </div>
                <div style={BUTTON_STYLES}>
                   {"Vote"}
                </div>
              </div>
            </div>
            <div style={VIS_PANE_STYLES}>
                
            </div>
        </div>
      </div>
    )
  }

})

const QUESTION_PANE_STYLES = {
    width: "30%",
    height: "95%",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    marginTop: "2.5%",
    marginBottom: "2.5%",
    boxSizing: "border-box",
    padding: 5,
    border: "1px solid #ccc"
};

const VIS_PANE_STYLES = {
    width: "60%",
    height: "95%",
    marginRight: "2.5%",
    marginTop: "2.5%",
    marginBottom: "2.5%",
    boxSizing: "border-box",
    padding: 5,
    border: "1px solid #ccc"
};


const WRAPPER_STYLES = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const CONTAINER_STYLES = {

  width: "600px",
  height: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap"

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
  height: "calc(100% - 150px)",
  width: "100%",
  boxSizing: "border-box",
  padding: 10
}

const FOOTER_STYLE = {
  fontSize: "15px",
  color: "#666",
  height: "75px",
  width: "100%",
  boxSizing: "border-box",
  padding: 10,
  display: "flex",
  flexWrap: "wrap"
}

const BUTTON_STYLES = {
  height: "25px",
  width: "50px",
  boxSizing: "border-box",
  paddingLeft: 5,
  paddingRight: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}