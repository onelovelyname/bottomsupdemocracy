import * as React from 'react';

// export interface SingleCheckListOption {
//     name: string;
//     value: number;
// }

// export interface SingleCheckListProps extends React.Props<SingleCheckList> {
//     options: SingleCheckListOption[];
//     onChange: (values: number) => void;
//     value: number;
// }

// export interface SingleCheckListState {

// }


export default React.createClass({

    render(){
        return <div style={STYLES}>
                   {
                       this.props.options.map((option) => {
                           var self = this;
                           var isSelected = function(){
                               if(self.props.value === undefined){
                                   return false;
                               }
                               if(self.props.value === option.value){
                                   return true;
                               }
                               return false;
                           }();
                           return (
                               <div key={option.value} style={ITEM_STYLES} onClick={() => {this.handleItemClick(option.value);}}>
                                    <div style={INPUT_WRAPPER}>
                                        <input readOnly={true} checked={isSelected} type={"checkbox"} />
                                    </div>
                                    <div style={LABEL_STYLES}>
                                        {option.name}
                                    </div>
                               </div>
                           )
                       })
                   }
                </div>
    },

    handleItemClick: function(val){

        this.props.onChange(val);
    }

});

const STYLES = {
    height: "100%",
    width: "100%"
}

const ITEM_HEIGHT = 25;
const ITEM_WIDTH = 150;

const ITEM_STYLES = {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    display: "flex"
}

const INPUT_WRAPPER = {
    height: ITEM_HEIGHT,
    width: ITEM_HEIGHT,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const LABEL_STYLES = {
    width: ITEM_WIDTH - ITEM_HEIGHT,
    height: ITEM_HEIGHT,
    boxSizing: "border-box",
    paddingLeft: 5,
    display: "flex",
    alignItems: "center"
}

const INPUT_STYLES = {
    height: "100%",
    width: "100%",
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
}