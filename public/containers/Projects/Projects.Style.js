import styled from 'styled-components';
import { Matter} from '../Aboutme/Aboutme.Style';
import media from '../../theme/media';

export const Projectname = styled(Matter)`
    padding-left: 10px;
    font-weight:bold;

    ${media.phone`
    padding-left: 0px;
    
    `}

`;

export const Customlink = styled.a`

     
    font-size:0.8em;
    color: steel blue;
    font-weight : 600;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
   
    &:hover{
    
        color: blue;
        opacity: 1;
        text-decoration: none;
        
    }

`;