import React from 'react';
import $ from 'jquery';
import SingleCheckList from '../components/singleCheckList.jsx';

// state 
export default React.createClass({

  getData: function(){

      var id = window.location.pathname;
      id = id.split('/');
      id = id[id.length - 1];
      console.log(id);

      var issuePromise = $.getJSON("/issue/" + id);

      var opinionPromise = $.getJSON("/api/opinions/" + id);

      $.when.apply($, [issuePromise, opinionPromise]).then((a, b) => {
          console.log(a, b);
          debugger;
      })
      var nextState = {
          issue: "",
          preferenceValue: 0,
          status: "not-voted"
      };
      this.setState(nextState);
  },

  componentWillMount: function componentWillMount() {
      var nextState = {
          issue: "",
          preferenceValue: 0,
          status: "not-voted"
      };
      this.setState(nextState);
  },

  componentDidMount: function componentDidMount() {
     this.getData();
  },

  divRef: HTMLDivElement,

  updatePreferenceValue: function(val){
      var nextState = {
          preferenceValue: val
      };
      this.setState(nextState);
  }, 

  render(){

    
    var preferenceOptions = [
        {value: 0,
         name: "Strongly Agree"},
         {value: 1,
         name: "Agree"},
         {value: 2,
         name: "Disagree"},
         {value: 3,
         name: "Strongly Disagree"}
    ]

    return ( 
      <div ref={(elt) => {}} style={WRAPPER_STYLES}>
        <div style={CONTAINER_STYLES}>
            <div style={QUESTION_PANE_STYLES}>
              <div style={HEADER_STYLE}>
                {"some issue title"}
              </div>
              <div style={DESCRIPTION_STYLE}>
                <div style={{height: "100px", width: "100%"}}>
                 {"some issue description"}
                </div>
                <div style={{height: "100px", width: "100%"}}>
                  <SingleCheckList options={preferenceOptions} value={this.state.preferenceValue}
                   onChange={this.updatePreferenceValue}>
                  </SingleCheckList>
                </div>
              </div>
              <div style={FOOTER_STYLE}>
                <div className={"tile-button"} style={$.extend({}, BUTTON_STYLES, {width: 75})}>
                   {"Delegate"}
                </div>
                <div className={"tile-button"} style={$.extend({marginLeft: "5px"}, BUTTON_STYLES)}>
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