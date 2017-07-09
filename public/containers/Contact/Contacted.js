import React,{Component} from 'react';
import {Content, Heading} from '../Aboutme/Aboutme.Style'
import {Formcontainer, Labels, Textarea, Inputs, Contactmatter, Message}  from './Contact.Style.js'
import Home from '../../components/Home/Home';

class Contacted extends Component{

render(){

    return(

        <div  style={{'paddingTop': '50px'}}>
        <div className='col-md-1'></div>
        <Home/>
        <Content className='col-md-6'>
            <Heading>Contact Me! </Heading>
            <Contactmatter>I'm open for colloborations or discussing about anything related to my
                area of interests.<br/><br/> Just drop in a message and I shall get back!
            </Contactmatter>
            <br/>
            <br/>
            <Formcontainer>
            <Message>Thanks for contacting !!!!</Message>
            </Formcontainer>
            </Content>
            </div>

    )


}
};

export default Contacted;






