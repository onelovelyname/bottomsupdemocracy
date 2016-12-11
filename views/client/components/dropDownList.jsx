

// export interface DropDownListOption {
//     name: string;
//     value: number;
// }

// export interface DropDownListProps extends React.Props<DropDownList> {
//     options: DropDownListOption[];
//     onChange: (value: number) => void;
//     value: number;
// }

// export interface DropDownListState {

// }
import * as React from "react";

const PLACEHOLDER_VALUE = "NO_OPTION_SELECTED";


export default React.createClass({

    render(){
        var val = this.props.value !== undefined ? this.props.value.toString() : undefined;
        return <div style={STYLES}>
                    <select ref={this.setRef} onChange={this.handleChange} style={STYLES} value={val}>
                        
                        {   
                            this.props.options !== undefined ? this.props.options.map((option) => {
                                return <option key={option.value} value={option.value.toString()}>{option.name}</option>
                            }) : ''
                        }
                    </select>
                </div>
    },

    selectRef: HTMLSelectElement,

    setRef(elt){
        this.selectRef = elt;
    },

    handleChange(){

       if(!(this.props.options !== undefined && this.props.options.length > 0)) return;
       
       if(this.selectRef.selectedIndex === 0){
           this.props.onChange(undefined);
           return;
       } 
       
       var opt = this.selectRef.options[this.selectRef.selectedIndex];
       var asInt = parseInt(opt.value);
       this.props.onChange(asInt);

    }

});

const STYLES = {
    height: "100%",
    width: "100%"
}

//<option key={"placeholder"} value={PLACEHOLDER_VALUE}> {"..."} </option>