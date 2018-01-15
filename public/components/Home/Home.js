import React,{ Component, PropTypes} from 'react';
import styled from 'styled-components';
import { Container, Image, Impline, Bioline,Bioinfo, Icons, Resume } from './Home.Style';


let buttonclicked;

export default class Home extends Component{


    render(){ 
    
        return (

            <Container className='col-md-3' >
            
            <center>
            <Image src='static/assets/profile_zoomed.jpg' alt='pranav dommata'/>
            <Bioline font={'1.9em'} margin={'0px 30px'}>Pranav Dommata</Bioline>

            <Bioinfo font={'1.2em'}  top={'10px'} left={'0px'}>Master's Student in Comp. Science </Bioinfo>
            <Bioinfo font={'1.2em'}  top={'0px'} left={'0px'}> University of Utah </Bioinfo>
            <div style={{'paddingTop':'20px'}}>
            
            <a href="http://linkedin.com/in/pranavnath-dommata/" target="_blank">
            <Icons left={'0px'} src='static/assets/linkedin.svg'  alt='linkedin page' />
            </a>
            <a href="http://github.com/u1068846" target="_blank">
            <Icons left={'10px'} src='static/assets/github.svg' alt='github page'/>
            </a>
            <a href="mailto:pranavnathdommata@gmail.com" >
            <Icons left={'10px'} src='static/assets/email.svg' alt='mail page'/>
            </a>
            
             <a href="static/assets/pranavdommata_Resume.pdf" target="_blank">
            <Icons left={'10px'} src='static/assets/list.svg' alt='resume'/>
            </a>
            
            <br/>
            <br/>
            

            <a href="static/assets/pranavdommata_Resume.pdf" target="_blank">
            <Resume className="btn btn-lg btn-default resume"> Resume </Resume>
            </a>
    
            </div>
            </center>
            </Container>
            

        )   ;
    }

}