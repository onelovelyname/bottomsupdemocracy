import React from 'react'
import $ from 'jquery'
import IssueTile from './issueTile.jsx'

export default React.createClass({

  getInitialState : function getInitialState() {
      return {
          issues : [],
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
    // if (this.props.issues){
    //   var issueStates = this.props.issues.map((v,i)=>{
    //     return (
    //       <div className="issueTile" key={i}>
    //         <IssueTile
    //           {...v}
    //         />
        
    //       </div>
    //     )
    //   })
    return <div ref={(elt) => {
       this.divRef = elt;
   }}>
   </div>
  }
})