import styled,{css} from 'styled-components';
import {Flex} from '../../theme/grid';

export const Container = styled.div`

position: fixed;
padding-top: 10px;
padding-bottom: 100px;
width : 400px;
margin: 150px 200px;
border-right: 6px solid #fff7c6; 

`;




export const Image = styled.img`

  width: 200px;
  height: 200px;
  margin : 0px 20px;
  border-radius : 50%;
`;

export const Icons = styled.img`

 width: 40px;
 height: 40px;
 margin-top: 20px;
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
    
    font-size: 2.5em;
    margin-bottom: 80px;


`;
export const Hello = styled.h1`
    
    font-size: 3.5em;
    margin-bottom: 80px;
    color:#7c9bf8;


`;

export const Bioinfo = styled(Flex)`

      ${({top})=> top && css` 
            margin-top : ${top};
       `};
      ${({left})=> left && css` 
            margin-left : ${left};
       `};

      ${({font})=> font && css` 
            font-size : ${font};
       `};
      ${({margin})=> margin && css` 
            margin : ${margin};
       `};
`;

export const Bioline = styled(Bioinfo)`
       
     margin-top : 30px;

       
`;
