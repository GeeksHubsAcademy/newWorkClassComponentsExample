
import React from 'react';

import './Counter.css';

class Counter extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value : 0
        }
    }

    operate(sign){

        if(sign){

            //If the state is going to mutate, it MUST be done with the this.setState function
            this.setState({value : this.state.value + this.props.frequency});
            
        }else{
            this.setState({value : this.state.value - this.props.frequency});
        }
    }


    render(){

        return(
            <div className="counterDesign">
                <div className="clickable" onClick={()=>this.operate(true)}>+</div>
                <div>{this.state.value}</div>
                <div className="clickable" onClick={()=>this.operate(false)}>-</div>
            </div>
        )
    }
}

export default Counter;