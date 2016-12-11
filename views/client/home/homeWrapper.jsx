import React from 'react'


export default React.createClass({

  componentWillMount: function componentWillMount() {
    
  },

  componentDidMount: function(){
      console.log(this.divRef);
  },

  divRef: HTMLDivElement,

  render(){
    return <div ref={(elt) => {
       this.divRef = elt;
   }}>
   </div>
  }
})