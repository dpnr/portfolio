import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {counterActions} from './actions';

class App extends React.Component{
    constructor(props){
        super(props);
    }
   click(){
     this.props.testClick();

   }
    render(){
        return(
            <div>
                <h1>Counter:{this.props.counter}</h1>
                <button onClick={this.click.bind(this)}>click me</button>

            </div>

        )
    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        testClick:()=> dispatch(counterActions("Add"))
    }

} 

const mapStateToProps = (state) => {
    return state;
}

const DefaultApp = connect(
mapStateToProps,
mapDispatchToProps
)(App)

export default DefaultApp;

