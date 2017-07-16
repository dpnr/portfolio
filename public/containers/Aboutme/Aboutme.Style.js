import styled from 'styled-components';
import media from '../../theme/media';

export const Content = styled.div`


padding-top: 50px;
padding-bottom: 70px;

z-index: -1;

`;

export const Heading = styled.h1`

padding-left: 20px;
padding-bottom: 30px;
font-size : 3em;
opacity : 0.8;
font-weight: bold;


`;


export const Subheading = styled(Heading)`

font-size : 1.5em;
padding : 12px;
padding-left : 60px;


      ${media.phone`
        padding-left: 10px;
        
    `}
`;


export const Matter = styled.h3`

margin-top:10px;
padding-left: 80px;
padding-right: 10px;
font-size : 1.3em;
font-weight : normal;
line-height : 25px;

    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;


      ${media.phone`
        padding-left: 20px;
        font-size : 1.2em;
    `}

`;