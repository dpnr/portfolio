import React,{Component} from 'react';
import {Content, Matter, Heading, Underline} from '../Aboutme/Aboutme.Style'
import {Projectname, Customlink} from './Projects.Style'
import Home from '../../components/Home/Home';


class Projects extends Component{

render(){

    return(

        <div  style={{'paddingTop': '50px'}}>
        <div className='col-md-1'> </div>
        <Home/>
       
        <div className='col-md-6'>
            <Content>
            <Heading>Projects </Heading>
            
            <Underline className='col-md-12 underline'>
            <Projectname>Finally Machine learning! <em style={{"fontSize":"1.0em", "fontWeight":"500"}}>(ongoing)</em></Projectname>
            </Underline>
            
                <Matter>The main goal is to build a machine learning (ML) classifier to efficiently perform the task of 
                    classifying the data of Twitter users. The classifier is supposed to predict if the user is a content 
                    polluter or not. Building in Python and no ML packages are used.
                </Matter>
          
            <br/>
            <br/>

            <Underline className='col-md-12 underline'>
            <Projectname>Event Extractions <em style={{"fontSize":"1.0em", "fontWeight":"500"}}>(ongoing)</em></Projectname>
            </Underline>
            
                <Matter>Building an information extraction(IE) system for the news articles as part of the Natural Language 
                    Processing (NLP) course work. Making use of the different NLP techniques 
                    to extract several types of information. Implementing it completely using Python and no libraries 
                    which does any means of event extractions are used.
                </Matter>
          
            <br/>
            <br/>


            <Underline className='col-md-12 underline'>
            <Projectname>Building Visualization tools</Projectname>
            </Underline>

                <Matter>I'm happy with the opportunities I have been getting in the recent past for building
                    the Visualization tools, some as a part of research at the university and some are at the 
                    industry level. Unfortunately, I cannot share details on those projects but will mention the 
                    technologies I have been using. I worked on <em>MEAN</em> stack and recently started working 
                    with <em>React</em>. Used <em>React + Express</em> for building this website as well.
                </Matter>
          
            <br/>
            <br/>
            <Underline className='col-md-12 underline'>   
            <Projectname>My first ever interactive webpage</Projectname>
            </Underline>
                <Matter>Have worked on this as a part of Data Visualization course I have taken
                    and that is when I started to love building the analytic tools and also 
                    web development in general. We used HTML, CSS, JavaScript and d3.js for building the page.
                    <br /><br /><Customlink  href="https://u1068846.github.io/VisProject/gradSchoolFinder.html">
                Project link!</Customlink>
                </Matter>
          
            <br/>
            <br/>
            <Underline className='col-md-12 underline'> 
            <Projectname>Deep into Databases</Projectname>
            </Underline>
                <Matter>Have worked on this as a part of Advanced Database Systems course and 
                    this project has helped me get to the bits and pieces of building a database system. This project is done completely in Java.
                <br/>
                </Matter>
             
             <br/>
             <br/>
             <Underline className='col-md-12 underline'> 
             <Projectname>This is when it all started (Arduino)</Projectname>
             </Underline>
                <Matter> Back in my Under-grad days, I fell in love with coding when I started to play with a 
                    micro-controller board, Arduino. Later, me along with two other friends we built a 
                    Automatic motor vehicle braking prototype using Arduino as our Senior year project. 
                    <br/><br/><Customlink href="https://github.com/u1068846/Arduino-Project-Overview/blob/master/Project%20Report.pdf">
                    More briefing here</Customlink>
                </Matter>
                
            
           </Content>
           </div>
           </div>

    )


}
};

export default Projects;






