import React,{Component} from 'react';
import {Content, Heading} from '../Aboutme/Aboutme.Style'
import {Formcontainer, Labels, Textarea, Inputs, Contactmatter}  from './Contact.Style.js'


class Contacted extends Component{

render(){

    return(

        <Content>
            <Heading>Contact Me! </Heading>
            <Contactmatter>I'm open for colloborations or discussing about anything related to my
                area of interests.<br/><br/> Just drop in a message and I shall get back!
            </Contactmatter>
            <br/>
            <br/>
            <Formcontainer>
            <Labels>Thanks for contacting !!!!</Labels>
            </Formcontainer>
            </Content>

    )


}
};

export default Contacted;






