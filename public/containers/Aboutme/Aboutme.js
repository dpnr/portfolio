import React,{Component} from 'react';
import {Content, Heading, Matter, Subheading, Underline} from './Aboutme.Style'
import Home from '../../components/Home/Home';


class Aboutme extends Component{

render(){

    return(
        
        <div  style={{'paddingTop': '50px'}}>
        <div className='col-md-1'></div>
        <Home/>
       
        <div className='col-md-6'>
            <Content>
                <Heading>About me </Heading>
                    <Matter> I'm a Master's Student at the <a href="https://www.utah.edu/">University of Utah(UoU)</a> living in Salt Lake City, Utah. 
                        My interest lies in the fields of Visual Analytics and Web application development. I expect to graduate by the end of 
                        Spring 2018 and would be glad to take up a professional career path in one of the fields I'm interested in.
                        <br/>
                        <br/>
                        I'm currently working with <a href="http://vdl.sci.utah.edu/team/lex/">Dr. Alexander Lex</a> in the <a href="http://vdl.sci.utah.edu/">Visualization design lab</a> at UoU on visualizing biological data.
                        I gained my professional experienece in the visual analytics domain through my internship at
                        the Pacific Northwest National Lab (PNNL), Washington during the summer of 2017.
                        <br/>
                        <br/>
                        Prior to taking up my graduate studies, I worked as a Software Engineer for two years at TEKsystems back in the country where
                        I'm from, India. 
                        <br/>
                      <br/>
                        On the personal side, I love pets and travelling, Also have a great passion for sketching.
                    </Matter>
               
                
                <Underline className='col-md-12 underline'>    
                    <Subheading>Industry Experience</Subheading>
                </Underline>
                
                     <Matter>
                         <a href="https://github.com/u1068846/Certificates/blob/master/PNNL_internship.pdf" style={{"fontSize":"1.0em", "fontWeight":"500"}} target="_blank">Master's Intern</a>   - Pacific Northwest National Lab, Washington during Summer of 2017.<br/><br/>
                         <a href="https://www.teksystems.com/" style={{"fontSize":"1.0em", "fontWeight":"500"}} target="_blank">Software Engineer</a> - TEKsystems, Hyderabad, India (May, 2014 - July, 2016).  
                     </Matter>
                <Underline className='col-md-12 underline'> 
                    <Subheading>Research Experience</Subheading>
                </Underline> 
                
                    <Matter>
                         <a href="http://vdl.sci.utah.edu/team/" style={{"fontSize":"1.0em", "fontWeight":"500"}} target="_blank">Student Researcher</a> - Independent Study under Dr. Alexander Lex since Spring 2017.
                    </Matter>
                
                <Underline className='col-md-12 underline'> 
                    <Subheading>Teaching Experience</Subheading>
                </Underline> 
                
                    <Matter>
                         <a href="http://dataviscourse.net/2017/" style={{"fontSize":"1.0em", "fontWeight":"500"}} target="_blank">Graduate Teaching Assistant</a> - Visualization for Data Science course, for the Fall 2017.
                    </Matter>
                
                
            </Content>
         </div>
      </div>
    )


}
};

export default Aboutme;






