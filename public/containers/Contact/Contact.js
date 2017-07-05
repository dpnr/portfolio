import React,{Component} from 'react';
import {Content, Heading} from '../Aboutme/Aboutme.Style'
import {Formcontainer, Labels, Textarea, Inputs, Contactmatter}  from './Contact.Style.js'


class Contact extends Component{

render(){

    return(

        <Content>
            <Heading>Contact Me! </Heading>
            <Contactmatter>I'm open for colloborations or discussing about anything related to my
                area of interests.<br/><br/> Just drop in a message and I shall get back!
            </Contactmatter>
            <br/>
            <form action='/contacted' method='post' role='form'>
                <Formcontainer>
                <div ><Labels htmlFor="userName">Name</Labels></div>
                <div width="100px"><Inputs type="text" id="userName" placeholder="Enter your Name" onfocus="this.placeholder = ''" className="form-control" name="userName" required></Inputs></div>
                </Formcontainer>
                
                <Formcontainer>
                <div><Labels>Email</Labels></div>
               <div><Inputs type="email" id="userEmail" placeholder="Enter your Email" onfocus="this.placeholder = ''" className="form-control" name="userEmail" required></Inputs></div>
                
                </Formcontainer>
               
                
                
                <Formcontainer>
                
                
                <div><Labels>Message</Labels></div>
                    <div>  <Textarea type="text" id="userMsg" placeholder="Enter your Message" onfocus="this.placeholder = ''" className="form-control" name="userMsg" requied></Textarea></div>
                </Formcontainer>

                <Formcontainer >
                <Inputs type='submit'></Inputs>
                </Formcontainer>

                </form>
            </Content>

    )


}
};

export default Contact;






