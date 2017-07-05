import React,{Component} from 'react';
import {Content, Matter, Heading} from '../Aboutme/Aboutme.Style'
import {Projectname, Customlink} from './Projects.Style'


class Projects extends Component{

render(){

    return(

        <Content>
            <Heading>Projects </Heading>
            
            <Projectname>My first ever interactive webpage</Projectname>
            <Matter>Have worked on this as a part of Data Visualization course I have taken
                and that is when I started to love building the analytic tools and also 
                web development in general. We used HTML, CSS, JavaScript and d3.js for building the page.
            </Matter>
           <Customlink  href="https://u1068846.github.io/VisProject/gradSchoolFinder.html">
            Project link(Please don't judge!)</Customlink>
            <br/>
           <br/>
            <Projectname>Deep into Databases</Projectname>
            <Matter>Have worked on this as a part of Advanced Database Systems course and 
                this project has helped me get to the bits and pieces of building a database system. This project is done completely in Java.
            </Matter>
             <Customlink href="http://catalog.utah.edu/preview_course_nopop.php?catoid=5&coid=59570">
             checkout the course page!</Customlink>
             <br/>
            <br/>
            
             <Projectname>This is when it all started (Arduino)</Projectname>
            <Matter> Back in my Under-grad days, I fell in love with coding when I started to play with a 
                micro-controller board, Arduino. Later, me along with two other friends we built a 
                Automatic motor vehicle braking prototype using Arduino as our Senior year project. 
            </Matter>
            <Customlink href="https://github.com/u1068846/Arduino-Project-Overview/blob/master/Project%20Report.pdf">
            More briefing here</Customlink>
            
            </Content>

    )


}
};

export default Projects;






