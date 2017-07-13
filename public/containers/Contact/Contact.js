import React,{Component} from 'react';
import {Content, Heading} from '../Aboutme/Aboutme.Style'
import {Formcontainer, Labels, Textarea, Inputs, Contactmatter, Button}  from './Contact.Style.js'
import Home from '../../components/Home/Home';

class Contact extends Component{

render(){

    return(

        <div  style={{'paddingTop': '50px'}}>
        <div className='col-md-1'></div>
        <Home/>
        <div className='col-md-6'>
            <Content>
            <Heading>Contact Me! </Heading>
            <Contactmatter>I'm open for colloborations or discussing about anything related to my
                area of interests.<br/><br/> Just drop in a message and I shall get back!
            </Contactmatter>
            <br/>
            <center>
            <form action='/contacted' method='post' role='form'>
                <Formcontainer>
                
                <div width="100px"><Inputs type="text" id="userName" placeholder="Name" onfocus="this.placeholder = ''" className="form-control" name="userName" required></Inputs></div>
                </Formcontainer>
                
                <Formcontainer>
               <div><Inputs type="email" id="userEmail" placeholder="Email" onfocus="this.placeholder = ''" className="form-control" name="userEmail" required></Inputs></div>
                
                </Formcontainer>
               
                
                
                <Formcontainer>
                
                
                
                 <div>  <Textarea type="text" id="userMsg" placeholder="Message" onfocus="this.placeholder = ''" className="form-control" name="userMsg" requied></Textarea></div>
                </Formcontainer>

                <Formcontainer >
                <Button type='submit' value="Submit"></Button>
                </Formcontainer>

                </form>
                </center>
            </Content>
            </div>
            </div>

    )


}
};

export default Contact;






