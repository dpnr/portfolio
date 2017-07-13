import styled from 'styled-components'
import {Matter} from '../Aboutme/Aboutme.Style';
import media from '../../theme/media';


export const Contactmatter = styled(Matter)`
    font-size: 1.1em;

`;

export const Formcontainer = styled.div`
margin: 10px 10px;
padding-left: 80px;
 ${media.phone`
        padding-left: 20px;
    
    `}
     ${media.tablet`
        padding-left: 40px;
        padding-right: 40px;
    `}

`;
export const Labels = styled.label`
font-size: 1.2em;
`;

export const Message = styled.label`
font-size: 2.2em;
  ${media.phone`
        font-size: 1.3em;
    
    `}

`;

export const Inputs = styled.input`

    font-size: 1.3em;
    width: 100%;
    margin: 8px 0;
    border-radius: 4px;
    
    
`;

export const Button = styled(Inputs)`
background-color: #4CAF50;
cursor: pointer;
color: white;
border: none;

`;

export const Textarea = styled.textarea`

font-size: 1.2em;
width: 100%;
height: 80px;
`;