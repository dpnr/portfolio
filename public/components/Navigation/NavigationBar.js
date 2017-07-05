import React,{Component} from 'react';
import {NavigationContainer, Headers, Containerflex} from './NavigationBar.style';

class NavigationBar extends Component{

    render(){
        return (
            <Containerflex>
            <NavigationContainer top={'2em'} >
                <Headers to='/' >About Me</Headers>
                <Headers to='/projects' >Projects</Headers>
                <Headers to='/contact' >Contact</Headers>

            </NavigationContainer>
            </Containerflex>
        );
    }
}

export default NavigationBar;