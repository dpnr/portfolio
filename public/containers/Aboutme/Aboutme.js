import React,{Component} from 'react';
import {Content, Heading, Matter} from './Aboutme.Style'
import Home from '../../components/Home/Home';


class Aboutme extends Component{

render(){

    return(
        
        <div  style={{'paddingTop': '50px'}}>
        <div className='col-md-1'></div>
        <Home/>
       
        <Content className='col-md-6'>
            <Heading>About me </Heading>
            <Matter> I'm currently a Master's Student at University of Utah(UoU) living in Salt lake city, Utah. 
                My interest lies in the fields of Visual Analytics and Web development. I expect to graduate by the end of 
                Spring 2018 and would be glad to take up a professional career path in one of the fields I'm interested in.
                <br/>
                <br/>
                I'm currently working with Dr. Alexander Lex at the SCI Institute@UoU on the research in visualizing biological data.
                I gained my professional experienece in the visual analytics domain through the Internship at
                the Pacific North-west National Lab (PNNL), Washington during the summer of 2017.
                <br/>
                <br/>
                Prior to taking up my graduate studies, I worked as a Software Engineer for two years at TEKsystems back in the country where
                I'm from, India. 
                <br/>
                <br/>
                On the personal side, I love pets and travelling, Also have a great passion for sketching.
            </Matter>
            </Content>
        </div>
    )


}
};

export default Aboutme;






