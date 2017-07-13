import styled from 'styled-components';
import { Matter} from '../Aboutme/Aboutme.Style';

export const Projectname = styled(Matter)`

    font-weight:bold;

`;

export const Customlink = styled.a`

     
    font-size:0.8em;
    color: steel blue;
    font-weight : normal;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
   
    &:hover{
    
        color: blue;
        opacity: 1;
        text-decoration: none;
        
    }

`;