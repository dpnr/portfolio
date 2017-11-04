import styled,{css} from 'styled-components';
import {Flex} from '../../theme/grid';
import media from '../../theme/media';


export const Container = styled.div`

margin-top: 40px;
padding-bottom: 30px;
border-right: 6px solid #fff7c6; 

    ${media.desktop`
        border-right: 0px solid white;
        border-bottom: 6px solid #fff7c6;
    
    `}

`;




export const Image = styled.img`

  width: 120px;
  height: 120px;
  margin-top: 40px;
  border-radius : 50%;
`;

export const Icons = styled.img`

 width: 30px;
 height: 30px;
 opacity : 0.8;

 ${({left}) => left && css`
 
 margin-left: ${left}

 `};

 &:hover
 {
    transform : scale(1.2);
    cursor : pointer;
 }
 


`;

export const Impline = styled.h1`
    
    font-size: 1.4em;
    margin-bottom: 80px;


`;
export const Hello = styled.h1`
    
    font-size: 3.5em;
    margin-bottom: 80px;
    color:#7c9bf8;


`;

export const Bioinfo = styled.p`


      ${({top})=> top && css` 
            margin-top : ${top};
       `};
      ${({left})=> left && css` 
            margin-left : ${left};
       `};

      ${({font})=> font && css` 
            font-size : ${font};
       `};
     margin: 0px 0px;
`;

export const Bioline = styled(Bioinfo)`
       
     margin-top : 30px;

       
`;
