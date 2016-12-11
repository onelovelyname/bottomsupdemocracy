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

      var issueAjaxSettings = {
          type: "GET",
          url: "/issue/" + id
      };
      
      var issuePromise = $.ajax(issueAjaxSettings);

      var opinionPromise = $.getJSON("/api/opinions/" + id);

      $.when.apply($, [issuePromise, opinionPromise]).then((a, b) => {
          console.log(a, b);
      })

      var nextState = {
          issue: 
            {
            "_id": "584d9d929dbd4e00113600ec",
            "title": "Should San Francisco remain a sancutuary city?",
            "scale": "local",
            "category": "immigration",
            "__v": 0,
            "opinions": []
            },
          opinions: 
            [
            {
            "_id": "584db0a2f3b43e001152c117",
            "updatedAt": "2016-12-11T20:01:39.046Z",
            "createdAt": "2016-12-11T20:01:39.046Z",
            "issue": "584d9e339dbd4e00113600ed",
            "user": "584dafa233b3d78b682c51b3",
            "statement": "Being a sanctuary city, for me, is the DNA of San Francisco. We’ll always be a sanctuary city.",
            "__v": 0
            },
            {
            "_id": "584db0d1f3b43e001152c118",
            "updatedAt": "2016-12-11T20:02:25.416Z",
            "createdAt": "2016-12-11T20:02:25.416Z",
            "issue": "584d9e339dbd4e00113600ed",
            "user": "584daeffa9c8148ab1b5c80f",
            "statement": "They’re [Mayors like SF’s Ed Lee] just thumbing their noses at federal law and putting their own citizens in danger. Trump has made it very clear he cares about the victims of these illegal alien sanctuary cities.",
            "__v": 0
            },
            {
            "_id": "584db2b6f3b43e001152c11a",
            "updatedAt": "2016-12-11T20:10:30.896Z",
            "createdAt": "2016-12-11T20:10:30.896Z",
            "issue": "584d9e339dbd4e00113600ed",
            "user": "584db1cdf3b43e001152c119",
            "statement": "Our legal system is never perfectly responsive to people's circumstances, and sanctuary, while not included in our statutes, has often been invoked in the United States. In particular, groups who have been the subject of prejudicial laws have sought and used sanctuary, sometimes to evade what they considered to be an unfair law and sometime to issue broad public challenges to injustices within the legal system.",
            "__v": 0
            }
            ],
          preferenceValue: 0,
          status: "not-voted"
      };
      console.log(nextState);
      this.setState(nextState);
  },

  componentWillMount: function componentWillMount() {
      var nextState = {
          issue: "",
          preferenceValue: 0,
          status: "not-voted",
          tab: 0
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

  tabOneButton: function(){
      this.setState({tab: 0});
  },

  tabTwoButton: function(){
      this.setState({tab: 1});
  },

  render(){

    
    var preferenceOptions = this.state.opinions !== undefined ? this.state.opinions.map((opt, i) => {
        return {name: opt.statement, value: i}
    }) : undefined;

    return ( 
      <div ref={(elt) => {}} style={WRAPPER_STYLES}>
       {this.state.opinions !== undefined && this.state.issue !== undefined ? 
        <div style={CONTAINER_STYLES}>
            <div style={{height: "50px", width: "100%", padding: 10, display: 'flex', flexWrap: "wrap"}}>
               <div onClick={this.tabOneButton} className={"tile-button"} style={{height: 30, width: 265}}>
                   {"Vote"}
               </div>
               <div onClick={this.tabTwoButton} className={"tile-button"} style={{marginLeft: 10, height: 30, width: 265}}>
                   {"View Responses"}
               </div>
            </div>
            {
                this.state.tab == 0 ?
            <div style={QUESTION_PANE_STYLES}>
              <div style={HEADER_STYLE}>
                {this.state.issue.title}
              </div>
              <div style={DESCRIPTION_STYLE}>
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
            </div> : 
            <div style={QUESTION_PANE_STYLES}>
               
            </div>
            }
        </div>
        : '' }
      </div>
    )
  }

})

const QUESTION_PANE_STYLES = {
    width: "100%",
    height: "calc(100% - 50px)",
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