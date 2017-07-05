import React,{ Component, PropTypes} from 'react';
import styled from 'styled-components';
import { Container, Image, Impline, Bioline,Bioinfo, Icons } from './Home.Style';


let buttonclicked;

export default class Home extends Component{


    render(){ 
    
        return (
            <Container>
            
            <Image src='static/assets/profile_zoomed.jpg' alt='profile piture'/>
            <Bioline font={'2.5em'} margin={'0px 30px'}>Pranav Dommata</Bioline>
            <Bioinfo font={'1.5em'}  top={'10px'} left={'30px'}>Master's Student </Bioinfo>
            <Bioinfo font={'1.5em'}  top={'0px'} left={'30px'}>Newbie Web Developer </Bioinfo>
            <a href="http://linkedin.com/in/pranavnath-dommata/" target="_blank">
            <Icons left={'30px'} src='static/assets/linkedin.svg'  alt='profile piture' />
            </a>
            <a href="http://github.com/u1068846" target="_blank">
            <Icons left={'20px'} src='static/assets/github.svg' alt='profile piture'/>
            </a>
            <a href="mailto:pranavnathdommata@gmail.com" target="_blank">
            <Icons left={'20px'} src='static/assets/email.svg' alt='profile piture'/>
            </a>
            
             <a href="static/assets/pranav_resume.pdf" target="_blank">
            <Icons left={'20px'} src='static/assets/list.svg' alt='profile piture'/>
            </a>
            
            </Container>

        )   ;
    }

}