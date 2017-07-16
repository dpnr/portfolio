import React,{Component} from 'react';
import {Content, Heading, Matter, Subheading} from './Aboutme.Style'
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
                    <Matter> I'm a Master's Student at the <a href="https://www.utah.edu/">University of Utah(UoU)</a> living in Salt lake city, Utah. 
                        My interest lies in the fields of Visual Analytics and Web development. I expect to graduate by the end of 
                        Spring 2018 and would be glad to take up a professional career path in one of the fields I'm interested in.
                        <br/>
                        <br/>
                        I'm currently working with <a href="http://vdl.sci.utah.edu/team/lex/">Dr. Alexander Lex</a> in the <a href="http://vdl.sci.utah.edu/">Visualization design lab</a> at UoU on visualizing biological data.
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
                <Subheading>Industry Experience</Subheading>
                     <Matter>
                         <em style={{"fontSize":"1.0em", "fontWeight":"500"}}>Master's Intern</em>   - Pacific Northwest National Lab, Washington during Summer of 2017.<br/><br/>
                         <em style={{"fontSize":"1.0em", "fontWeight":"500"}}>Software Engineer</em> - TEKsystems, Hyderabad, India (May, 2014 - July, 2016).  
                     </Matter>
                <Subheading>Research Experience</Subheading>
                    <Matter>
                         <em style={{"fontSize":"1.0em", "fontWeight":"500"}}>Independent Study under Dr. Alexander Lex</em> during Spring 2017.
                    </Matter>
                <Subheading>Other Responsibilities</Subheading>
                    <Matter>
                         <em style={{"fontSize":"1.0em", "fontWeight":"500"}}>Public Relations</em> - Indian Students Association, University of Utah (Since Summer, 2017).
                    </Matter>
                
            </Content>
         </div>
      </div>
    )


}
};

export default Aboutme;






