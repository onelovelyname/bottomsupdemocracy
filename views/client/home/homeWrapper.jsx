import React from 'react';
import $ from 'jquery';
import IssueTile from './issueTile.jsx';
import IssueFilter from './issueFilter.jsx';
import IssueContainer from './issueContainer.jsx';
import IssuePaginator from "./issuePaginator.jsx";

export default React.createClass({

  getInitialState : function getInitialState() {
      return {
          issues : [

            
          ],
      };
  },

  componentWillMount: function componentWillMount() {
    $.getJSON("/api/issues").then((function (issues) {
      this.setState({
        issues: issues
      });
    }.bind(this)));

  },

  componentDidMount: function componentDidMount() {
    console.log(this.state.issues);
  },

  divRef: HTMLDivElement,

  render(){

    return ( 
      <div ref={(elt) => {}} style={WRAPPER_STYLES}>
        <div style={ISSUE_CONTAINER_STYLES}>
          <IssueFilter>
          </IssueFilter>
          <IssueContainer>
          </IssueContainer>
          <IssuePaginator>
          </IssuePaginator>
        </div>
      </div>
    )
  }

})


const WRAPPER_STYLES = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const ISSUE_CONTAINER_STYLES = {

  width: "600px",
  height: "100%",
  boxSizing: "border-box"

}

