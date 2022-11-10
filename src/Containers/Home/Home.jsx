
//This is an example of a CLASS component

import React from 'react';
import Counter from '../../Components/Counter/Counter';

import './Home.css';

class Home extends React.Component {

    //As a class component, we have a constructor...

    constructor(props){
        super(props);

        //Here, inside the constructor I declare the state

        this.state = {
            switch: false
        }
    };

    //Life-cycle functions...

    componentDidMount(){
        //This is triggered once the component is MOUNTED FOR THE FIRST TIME
    };

    componentDidUpdate(){
        //This is triggered EVERY time the component is updated

    };

    componentWillUnmount(){
        //At last but not least, this will be executed when the component is unmounted
    };


    //Method

    change(){

        //Now, we are going to alter the value of the state!!!!
        this.setState({switch: !this.state.switch});

        //This would be an extremely bad practice, state must NOT be altered
        // this.state.switch = true;
    }
    

    //Now, we see the render zone... the return is inside the render method...

    render(){

        return(
            // Is mandatory that the return contains a father JSX node

            <div className="homeDesign">
                I am Home.

                <div className="showButtonDesign" onClick={()=>this.change()}>Show the counter</div>

                {/* Conditional Interpolation..... */}
                {
                    this.state.switch === true &&

                    <Counter frequency={6}/>

                }
            </div>
        )
    }

};

export default Home;