import React,{Component} from 'react';
import {Links, Acustom} from './NavigationBar.style';


 

class NavigationBar_b extends Component{



    render(){
        return (
            <div>
            <div className= "navbar navbar-default navbar-static-top navbar-fixed-top" style={{'background':'-webkit-gradient(linear, 0% 0%, 0% 100%, from(#BCE8EB), to(#FFFFFF), color-stop(.4,#DEFFFE))','border':'none'}}>

                <div className = "container" >

                    <div className = 'navbar-header'>
                    <a href = "#" className = "navbar-brand">Hi there! </a>
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
                        <span className = "icon-bar"></span>
                        <span className = "icon-bar"></span>
                        <span className = "icon-bar"></span>
                    </button>
                    </div>


                    <div className = "collapse navbar-collapse navHeaderCollapse">
                        
                        <ul className ="nav navbar-nav navbar-right">

                            <Links className="nav-item" ><Acustom className='nav-link' href="#" >About me</Acustom></Links>
                            <Links className="nav-item" ><Acustom className='nav-link' href="/#/projects">Projects</Acustom></Links>
                            <Links className="nav-item" ><Acustom className='nav-link' href="/#/contact">Contact</Acustom></Links>


                        </ul>
                    
                    </div>



                </div>

            </div>
            </div>
         
        );
    }
}

export default NavigationBar_b;